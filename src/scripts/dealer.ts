import {
	getOtherPlayer,
	type GameState,
	type Item,
	type PlayerType,
	type Target
} from '../interfaces/gameInterfaces';
import type { TransferState } from '../interfaces/rtcInterfaces';
import { coinFlip } from './helper';
import Player from './player';
import Shotgun from './shotgun';
import { isHost } from './store';
import { Chest, Interpreter } from './types';

export default class Dealer {
	private pHost: Player = new Player();
	private pClient: Player = new Player();
	private activePlayer: PlayerType;

	private stage: number = 1;
	private shotgun: Shotgun = new Shotgun();
	private usedItems: Item[] = [];
	private onDrawItemCallback!: (player: PlayerType, item: Item) => void;
	private onStageChangeCallback!: (player: PlayerType, state: TransferState, stage: number) => void;

	public static readonly livesPerStage = [2, 4, 5];
	public static readonly itemsPerStage = [0, 2, 4];

	constructor() {
		this.activePlayer = coinFlip() ? 'host' : 'client';
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
		this.clearItems();
		const newRound = this.stageProgression();
		this.reloadShotgun(newRound);
	}

	useItem() {
		// TODO
	}

	myTurn(): boolean {
		return isHost() && this.activePlayer == 'host';
	}

	private calculateShotResult(player: PlayerType, target: Target) {
		const shell = this.shotgun.getShell();

		if (shell) {
			if (target == 'self') {
				this.dealDamage(player);
			} else {
				this.dealDamage(getOtherPlayer(player));
			}

			this.activePlayer = getOtherPlayer(this.activePlayer);
		} else if (!shell && target == 'opponent') {
			this.activePlayer = getOtherPlayer(this.activePlayer);
		} else if (!shell && target == 'self') {
			// extra turn
		}
	}

	private dealDamage(player: PlayerType) {
		const damage = 1;

		if (player == 'host') {
			this.pHost.takeDamage(damage);
		} else {
			this.pClient.takeDamage(damage);
		}
	}

	private clearItems() {
		this.usedItems = [];
	}

	private stageProgression(): boolean {
		if (this.pHost.health <= 0 || this.pClient.health <= 0) {
			const lives = Dealer.livesPerStage[this.stage++];
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
		const numItems = Dealer.itemsPerStage[this.stage - 1];
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

	onDrawItem(callback: (player: PlayerType, item: Item) => void) {
		this.onDrawItemCallback = callback;
	}

	private notifyDrawItem(player: PlayerType, item: Item) {
		console.log(item);

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
