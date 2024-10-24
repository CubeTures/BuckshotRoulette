import { get } from 'svelte/store';
import type { Item, PlayerData, PlayerType, Target } from '../interfaces/gameInterfaces';
import type { Transfer, TransferMessage } from '../interfaces/rtcInterfaces';
import { host, isHost } from './store';

import winIcon from '$lib/assets/icons/Win.png';
import loseIcon from '$lib/assets/icons/Lose.png';

// takes instructions from the interpreter and mirrors the state of the host
export default class Mirror {
	pHost!: PlayerData;
	pClient!: PlayerData;
	activePlayer!: PlayerType;
	private previousActivePlayer!: PlayerType;
	stage: number = 0;
	messages: string[] = [];
	shells: boolean[] = [];

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
			this.stage = transfer.stage;
			transfer.player == 'host' ? this.hostWins++ : this.clientWins++;
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

	saveShell(shell: boolean) {
		this.shells.push(shell);
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
