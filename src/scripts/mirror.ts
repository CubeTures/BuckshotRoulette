import type { Item, PlayerData, PlayerType, Target } from '../interfaces/gameInterfaces';
import type { Transfer } from '../interfaces/rtcInterfaces';
import { isHost } from './store';

// takes instructions from the interpreter and mirrors the state of the host
export default class Mirror {
	pHost!: PlayerData;
	pClient!: PlayerData;
	activePlayer!: PlayerType;
	stage: number = 1;
	message: string = '';

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
		}

		this.activePlayer = transfer.state.turn;

		// console.log(
		// 	'New State: Host: ' + JSON.stringify(this.pHost) + ', Client: ' + JSON.stringify(this.pClient)
		// );
	}

	saveMessage(message: string) {
		this.message = message;
		setTimeout(() => (this.message = ''), 5000);
	}
}
