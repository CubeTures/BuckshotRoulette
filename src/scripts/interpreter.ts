import { get, type Writable } from 'svelte/store';
import type { PartialTransfer, Transfer } from '../interfaces/rtcInterfaces';
import { dealer, isHost, mirror, receivedActions, sentActions } from './store';
import { sendMessage } from './channel';
import type { GameState, PlayerType } from '../interfaces/gameInterfaces';

export function broadcastStart() {
	if (isHost()) {
		const gState = get(dealer).getState();

		const trans: Transfer =
			gState.host.turn == 'host'
				? {
						player: 'host',
						state: gState.host
					}
				: {
						player: 'client',
						state: gState.client
					};

		read(trans);
		sendMessage(trans);
	}
}

export function broadcastState(transfer: Transfer) {
	if (isHost() && stateChanged(transfer)) {
		const gState = get(dealer).getState();
		const trans = chooseState(transfer, gState);
		read(trans);
		sendMessage(trans);
	}
}

function stateChanged(transfer: Transfer): boolean {
	return transfer.action !== undefined;
}

function chooseState(transfer: Transfer, state: GameState): Transfer {
	if (hostChanged(transfer)) {
		return {
			player: 'host',
			state: state.host
		};
	}

	return {
		player: 'client',
		state: state.client
	};
}

function hostChanged(transfer: Transfer) {
	if (transfer.player == 'host') {
		return transfer.action?.shoot?.target == 'self' || transfer.action?.item;
	} else {
		return transfer.action?.shoot?.target == 'opponent';
	}
}

export function act(partial: PartialTransfer | Transfer) {
	// if host:
	//		record state in dealer
	//		send action to self and client
	//		broadcast state

	// if client:
	// 		send action to self and host
	// 		host processes and returns state

	const transfer = complete(partial);
	read(transfer);
	sendMessage(transfer);
}

function isComplete(transfer: PartialTransfer | Transfer): transfer is Transfer {
	return Object.hasOwn(transfer, 'player');
}

function interpretAction(transfer: Transfer) {
	if (transfer.action) {
		if (transfer.action.shoot) {
			// start shoot animation
			// wait until receiving state update to complete animation
			// use change in health to determine if blank or not

			if (isHost()) {
				get(dealer).shoot(transfer.player, transfer.action.shoot.target);
			}
		}
		// else if(transfer.action.item)
	}
}

export function read(transfer: Transfer) {
	setLog(transfer);
	interpretAction(transfer);
	broadcastState(transfer);

	if (transfer.state) {
		mirror.update((m) => {
			m.saveState(transfer);
			return m;
		});
	} else if (transfer.action) {
		// process action
		// respond with a state update for mirror
		// play animation
	} else if (transfer.message) {
		mirror.update((m) => {
			m.saveMessage(transfer.message as string);
			return m;
		});
	} else {
		throw new Error('No action found in transfer');
	}
}

function setLog(transfer: Transfer) {
	if (isHost()) {
		if (transfer.player == 'host') {
			addLog(sentActions, transfer);
		} else {
			addLog(receivedActions, transfer);
		}
	} else {
		if (transfer.player == 'host') {
			addLog(receivedActions, transfer);
		} else {
			addLog(sentActions, transfer);
		}
	}
}

function addLog(log: Writable<string[]>, transfer: Transfer) {
	const count = get(sentActions).length + get(receivedActions).length + 1;

	log.update((l) => {
		l.push(`${count}: ${pretty(transfer)}`);
		return l;
	});
}

function complete(partial: PartialTransfer | Transfer): Transfer {
	if (isComplete(partial)) {
		return partial;
	} else {
		return {
			player: isHost() ? 'host' : 'client',
			...partial
		};
	}
}

export function parse(message: string): Transfer {
	return JSON.parse(message);
}

export function pretty(transfer: Transfer): string {
	return JSON.stringify(transfer, null, 2);
}
