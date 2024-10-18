import { get, type Writable } from 'svelte/store';
import type { PartialTransfer, Transfer } from '../interfaces/rtcInterfaces';
import { adrenaline, dealer, isHost, mirror, receivedActions, sentActions } from './store';
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
		} else if (transfer.action.item) {
			if (transfer.action.item.use) {
				// animation

				if (isHost()) {
					get(dealer).useItem(transfer.player, transfer.action.item.use);
				}

				if ((transfer.player == 'host') == isHost()) {
					if (transfer.action.item.use == 'adrenaline') {
						adrenaline.set(true);
					} else {
						adrenaline.set(false);
					}
				}
			} else if (transfer.action.item.draw) {
				// animation
			}
		}
	}
}

export function secretMessage(player: PlayerType, message: string) {
	if (!isHost()) {
		throw new Error('Only host should emit a message');
	}

	if (player == 'host') {
		read({
			player,
			message
		});
	} else {
		sendMessage({
			player,
			message
		});
	}
}

export function read(transfer: Transfer) {
	setLog(transfer);

	if (transfer.state) {
		mirror.update((m) => {
			m.saveState(transfer);
			return m;
		});
	} else if (transfer.action) {
		interpretAction(transfer);
	} else if (transfer.message) {
		mirror.update((m) => {
			m.saveMessage(transfer.message as string);
			return m;
		});
	} else {
		throw new Error('No action found in transfer');
	}

	broadcastState(transfer);
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
