import type { Item, PlayerData, Target } from '../interfaces/gameInterfaces';
import type { Transfer } from '../interfaces/rtcInterfaces';
import { isHost } from './store';

// takes instructions from the interpreter and mirrors the state of the host
export default class Mirror {
	pHost!: PlayerData;
	pClient!: PlayerData;

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

		console.log(
			'New State: Host: ' + JSON.stringify(this.pHost) + ', Client: ' + JSON.stringify(this.pClient)
		);
	}

	getHealth(target: Target): number {
		if (isHost() && target == 'self') {
			return this.pHost.health;
		} else {
			return this.pClient.health;
		}
	}

	getItems(target: Target): Item[] {
		if (isHost() && target == 'self') {
			return this.pHost.items;
		} else {
			return this.pClient.items;
		}
	}
}
