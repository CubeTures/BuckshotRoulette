import {
	getOtherPlayer,
	type GameState,
	type Item,
	type PlayerType,
	type Target
} from '../interfaces/gameInterfaces';
import { coinFlip } from './helper';
import Player from './player';
import Shotgun from './shotgun';
import { isHost } from './store';

export default class Dealer {
	private pHost: Player = new Player();
	private pClient: Player = new Player();
	private activePlayer: PlayerType;

	private stage: number = 1;
	private shotgun: Shotgun = new Shotgun();
	private usedItems: Item[] = [];

	constructor() {
		this.activePlayer = coinFlip() ? 'host' : 'client';
	}

	getState(): GameState {
		return {
			host: {
				health: this.pHost.health,
				items: this.pHost.items
			},
			client: {
				health: this.pClient.health,
				items: this.pClient.items
			}
		};
	}

	shoot(player: PlayerType, target: Target) {
		this.calculateShotResult(player, target);
		this.clearItems();
		this.stageProgression();
		this.reloadShotgun();
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
		} else if (!shell && target == 'self') {
			// extra turn
		} else if (!shell && target == 'opponent') {
			this.activePlayer = getOtherPlayer(this.activePlayer);
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

	private stageProgression() {
		if (this.pHost.health <= 0 || this.pClient.health <= 0) {
			this.stage++;
		}
	}

	private reloadShotgun() {
		if (this.shotgun.isEmpty()) {
			this.shotgun.reloadShotgun();
		}
	}

	private drawItems() {
		// distribute items
	}
}
