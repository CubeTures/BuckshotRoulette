import {
	getOtherPlayer,
	type GameState,
	type Item,
	type PlayerType,
	type Target
} from '../interfaces/gameInterfaces';
import type { TransferState } from '../interfaces/rtcInterfaces';
import { capitalize, coinFlip } from './helper';
import Player from './player';
import Shotgun from './shotgun';
import { isHost } from './store';
import { Chest, Interpreter } from './types';

export default class Dealer {
	private pHost: Player = new Player();
	private pClient: Player = new Player();
	private activePlayer: PlayerType;

	private stage: number = 0;
	private shotgun: Shotgun = new Shotgun();
	private usedItems: Item[] = [];
	private adrenaline: boolean = false;
	private onDrawItemCallback!: (player: PlayerType, item: Item) => void;
	private onStageChangeCallback!: (player: PlayerType, state: TransferState, stage: number) => void;

	public static readonly livesPerStage = [2, 4, 5, 5];
	public static readonly itemsPerStage = [0, 2, 4, 4];

	private changeTurnFlag: boolean = false;

	constructor() {
		this.activePlayer = coinFlip() ? 'host' : 'client';

		const activeMessage = 'You go first.';
		const inactiveMessage = "You'll go second.";
		Interpreter.secretMessage(
			'host',
			this.activePlayer == 'host' ? activeMessage : inactiveMessage
		);
		Interpreter.secretMessage(
			'client',
			this.activePlayer == 'client' ? activeMessage : inactiveMessage
		);
	}

	getState(): GameState {
		return {
			host: {
				health: this.pHost.health,
				items: this.pHost.items,
				turn: this.activePlayer
			},
			client: {
				health: this.pClient.health,
				items: this.pClient.items,
				turn: this.activePlayer
			}
		};
	}

	shoot(player: PlayerType, target: Target) {
		this.calculateShotResult(player, target);
		this.progression();
	}

	private progression() {
		const newRound = this.stageProgression();
		this.reloadShotgun(newRound);
		this.changeTurn(newRound);
	}

	useItem(player: PlayerType, item: Item) {
		this.usedItems.push(item);

		Interpreter.broadcastState({
			player,
			action: {
				item: {
					use: item
				}
			}
		});

		if (this.adrenaline) {
			console.log(`${player} stole ${item} from ${getOtherPlayer(player)}`);
			this.getPlayer(getOtherPlayer(player)).removeItem(item);
			Interpreter.broadcastStatePlayer(getOtherPlayer(player));
			this.adrenaline = false;
		} else {
			console.log(`${capitalize(player)} used ${capitalize(item)}`);
			this.getPlayer(player).removeItem(item);
		}

		if (item == 'magnifying_glass') {
			const message = this.shotgun.magnifyingGlass();
			Interpreter.secretMessage(player, message);
		} else if (item == 'burner_phone') {
			const message = this.shotgun.burnerPhone();
			Interpreter.secretMessage(player, message);
		} else if (item == 'can_of_beer') {
			const message = this.shotgun.canOfBeer();
			Interpreter.act({ player, message });
			this.reloadShotgun();
		} else if (item == 'cigarette_pack') {
			this.getPlayer(player).heal(1, Dealer.livesPerStage[this.stage]);
		} else if (item == 'expired_medicine') {
			const flip = coinFlip();
			const p = this.getPlayer(player);
			if (flip) {
				p.heal(2, Dealer.livesPerStage[this.stage]);
			} else {
				p.takeDamage(1);

				if (p.health <= 0) {
					this.changeTurnFlag = true;
					this.progression();
				}
			}
		} else if (item == 'adrenaline') {
			this.adrenaline = true;
		}
	}

	myTurn(): boolean {
		return isHost() && this.activePlayer == 'host';
	}

	private getPlayer(player: PlayerType) {
		return player == 'host' ? this.pHost : this.pClient;
	}

	private calculateShotResult(player: PlayerType, target: Target) {
		let shell = this.shotgun.getShell();
		shell = this.usedItems.includes('inverter') ? !shell : shell;
		console.log(`Shell is ${shell ? 'live' : 'blank'}`);

		if (shell) {
			if (target == 'self') {
				this.dealDamage(player);
				if (this.getPlayer(player).health > 0) {
					this.changeTurnFlag = true;
				}
			} else {
				this.dealDamage(getOtherPlayer(player));
				this.changeTurnFlag = true;
			}
		} else if (!shell && target == 'opponent') {
			this.changeTurnFlag = true;
		} else if (!shell && target == 'self') {
			console.log('Extra Turn');
		}
	}

	private dealDamage(player: PlayerType) {
		const damage = this.usedItems.includes('handsaw') ? 2 : 1;
		this.getPlayer(player).takeDamage(damage);
	}

	private clearItems() {
		this.usedItems = [];
	}

	private stageProgression(): boolean {
		if (this.pHost.health <= 0 || this.pClient.health <= 0) {
			const lives = Dealer.livesPerStage[++this.stage];
			this.pHost.health = lives;
			this.pClient.health = lives;
			this.notifyStageChange();
			return true;
		}

		return false;
	}

	private reloadShotgun(newRound: boolean = false) {
		if (newRound || this.shotgun.isEmpty()) {
			this.shotgun.reloadShotgun();
			this.drawItems();

			Interpreter.act({
				player: 'host',
				message: this.shotgun.reloadStats
			});
		}
	}

	private drawItems() {
		const numItems = Dealer.itemsPerStage[this.stage];
		for (let i = 0; i < numItems; i++) {
			if (!this.pHost.atMaxItems()) {
				const item = Chest.drawItem();
				this.pHost.addItem(item);
				this.notifyDrawItem('host', item);
			}
			if (!this.pClient.atMaxItems()) {
				const item = Chest.drawItem();
				this.pClient.addItem(item);
				this.notifyDrawItem('client', item);
			}
		}
	}

	private changeTurn(newRound: boolean = false) {
		if (this.changeTurnFlag || newRound) {
			if (this.usedItems.includes('handcuffs') && !newRound) {
				this.changeTurnFlag = false;
			} else {
				this.activePlayer = getOtherPlayer(this.activePlayer);
			}

			this.clearItems();
		}

		this.changeTurnFlag = false;
	}

	onDrawItem(callback: (player: PlayerType, item: Item) => void) {
		this.onDrawItemCallback = callback;
	}

	private notifyDrawItem(player: PlayerType, item: Item) {
		if (this.onDrawItemCallback) {
			this.onDrawItemCallback(player, item);
		}
	}

	onStageChange(callback: (player: PlayerType, state: TransferState, stage: number) => void) {
		this.onStageChangeCallback = callback;
	}

	private notifyStageChange() {
		if (this.onStageChangeCallback) {
			const gState = this.getState();
			const state = this.activePlayer == 'host' ? gState.host : gState.client;
			this.onStageChangeCallback(this.activePlayer, state, this.stage);
		}
	}
}
