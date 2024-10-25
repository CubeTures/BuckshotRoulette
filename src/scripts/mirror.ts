import { get } from 'svelte/store';
import type { Animation, PlayerData, PlayerType, Target } from '../interfaces/gameInterfaces';
import type { Transfer, TransferMessage } from '../interfaces/rtcInterfaces';
import { frame, host } from './store';

import winIcon from '$lib/assets/icons/Win.png';
import loseIcon from '$lib/assets/icons/Lose.png';
import buckshot from '$lib/assets/icons/Buckshot.png';
import { capitalize } from './helper';
import { animationDone, getAnimationLength, getFrame } from './animation';

// takes instructions from the interpreter and mirrors the state of the host
export default class Mirror {
	pHost!: PlayerData;
	pClient!: PlayerData;
	activePlayer!: PlayerType;
	private previousActivePlayer!: PlayerType;
	stage: number = 0;
	messages: string[] = [];
	shells: boolean[] = [];

	animating: boolean = false;
	endShotShell: boolean = false;
	hostWins: number = 0;
	clientWins: number = 0;
	gameOver: boolean = false;
	gameOverIcon: string = '';

	hostHandcuffs: boolean = false;
	clientHandcuffs: boolean = false;
	hostAdrenaline: boolean = false;
	clientAdrenaline: boolean = false;
	hostHandsaw: boolean = false;
	clientHandsaw: boolean = false;
	private onMessage!: (message: string) => void;
	private onAnimationComplete: (() => void) | undefined;

	constructor() {
		this.pHost = this.getDefaultPlayerData();
		this.pClient = this.getDefaultPlayerData();
	}

	private getDefaultPlayerData(): PlayerData {
		return {
			health: 2,
			items: []
		};
	}

	saveState(transfer: Transfer) {
		if (!transfer.state) {
			throw new Error('Cannot update null state');
		}

		if (transfer.player == 'host') {
			this.pHost = transfer.state;
		} else {
			this.pClient = transfer.state;
		}

		if (transfer.stage) {
			if (this.stage > 0) {
				transfer.player == 'host' ? this.hostWins++ : this.clientWins++;
			}

			this.stage = transfer.stage;
		}

		if (this.hostWins >= 2) {
			if (get(host)) {
				this.win();
			} else {
				this.lose();
			}
		}
		if (this.clientWins >= 2) {
			if (get(host)) {
				this.lose();
			} else {
				this.win();
			}
		}

		if (this.activePlayer) {
			this.previousActivePlayer = this.activePlayer;
		}

		this.activePlayer = transfer.state.turn;

		if (this.activePlayer != this.previousActivePlayer) {
			this.hostHandcuffs = false;
			this.clientHandcuffs = false;
			this.hostAdrenaline = false;
			this.clientAdrenaline = false;
			this.hostHandsaw = false;
			this.clientHandsaw = false;
		}

		// console.log(
		// 	'New State: Host: ' + JSON.stringify(this.pHost) + ', Client: ' + JSON.stringify(this.pClient)
		// );
	}

	saveMessage(message: TransferMessage) {
		this.messages.push(message.message);
		this.notifyOnMessage(message.message);

		if (message.reload) {
			this.shells = [];
		}
	}

	animateShoot(player: PlayerType, target: Target) {
		console.warn('Starting Animation');
		this.animating = true;
		const p: Target = (player == 'host') == get(host) ? 'self' : 'opponent';
		const anim: Animation = (capitalize(p) + capitalize(target)) as Animation;
		console.log(`Animation: ${anim}`);
		this.endShotFrame.bind(this);
		this.nextAnimationFrame(
			anim,
			0,
			(i) => i + 1,
			(anim) => this.endShotFrame(anim)
		);
	}

	nextAnimationFrame(
		animation: Animation,
		frameCount: number,
		changeFrameFunction: (i: number) => number,
		callback: (animation: Animation) => void,
		stallAfterComplete: number = 200,
		reversed: boolean = false
	) {
		if (animationDone(animation, frameCount, reversed)) {
			if (this.onAnimationComplete) {
				setTimeout(() => callback(animation), stallAfterComplete);
			} else {
				setTimeout(
					() =>
						this.nextAnimationFrame(
							animation,
							frameCount,
							changeFrameFunction,
							callback,
							stallAfterComplete,
							reversed
						),
					200
				);
			}
		} else {
			frame.set(getFrame(animation, frameCount, reversed));
			// console.log(get(frame));
			setTimeout(
				() =>
					this.nextAnimationFrame(
						animation,
						changeFrameFunction(frameCount),
						changeFrameFunction,
						callback,
						stallAfterComplete,
						reversed
					),
				100
			);
		}
	}

	endShotFrame(animation: Animation) {
		console.warn('End Shot Animation');

		if (this.endShotShell) {
			this.nextAnimationFrame(
				'Live',
				0,
				(i) => i + 1,
				() => this.endAnimation(),
				0
			);
		} else {
			this.nextAnimationFrame(
				animation,
				getAnimationLength(animation) - 1,
				(i) => i - 1,
				() => this.endAnimation(),
				200,
				true
			);
		}
	}

	endAnimation() {
		console.warn('Completing Animation');
		this.animating = false;
		frame.set(buckshot);
		this.onAnimationComplete && this.onAnimationComplete();
	}

	subscribeOnMessage(callback: (message: string) => void) {
		if (this.onMessage == undefined) {
			this.onMessage = callback;

			if (this.messages) {
				for (const message of this.messages) {
					this.notifyOnMessage(message);
				}
			}
		}
	}

	notifyOnMessage(message: string) {
		if (this.onMessage) {
			this.onMessage(message);
		}
	}

	saveShell(shell: boolean, callback: () => void) {
		this.endShotShell = shell;
		this.onAnimationComplete = () => {
			console.log(`Completing animation: ${shell ? 'live' : 'blank'}`);
			this.shells.push(shell);
			this.animating = false;
			callback();
		};
	}

	win() {
		this.gameOverIcon = winIcon;
		this.gameOver = true;
		console.log('You win');
	}

	lose() {
		this.gameOverIcon = loseIcon;
		this.gameOver = true;
		console.log('You lose');
	}
}
