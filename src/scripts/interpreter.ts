import { get, type Writable } from 'svelte/store';
import type { PartialTransfer, Transfer, TransferMessage } from '../interfaces/rtcInterfaces';
import { adrenaline, dealer, isHost, mirror, receivedActions, sentActions } from './store';
import { sendMessage } from './channel';
import type { GameState, PlayerType } from '../interfaces/gameInterfaces';

let backlog: Transfer[] = [];

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

		act(trans);
	}
}

export function broadcastStatePlayer(player: PlayerType) {
	const gState = get(dealer).getState();
	const trans =
		player == 'host' ? { player, state: gState.host } : { player, state: gState.client };
	act(trans);
}

export function broadcastState(transfer: Transfer) {
	if (isHost() && stateChanged(transfer)) {
		const gState = get(dealer).getState();
		const trans = chooseState(transfer, gState);
		act(trans);
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

	if (isHost()) {
		sendMessage(transfer);
		read(transfer);
	} else {
		read(transfer);
		sendMessage(transfer);
	}
}

function isComplete(transfer: PartialTransfer | Transfer): transfer is Transfer {
	return Object.hasOwn(transfer, 'player');
}

function interpretAction(transfer: Transfer) {
	if (transfer.action) {
		if (transfer.action.shoot) {
			if (transfer.action.shoot.target) {
				get(mirror).animateShoot(transfer.player, transfer.action.shoot.target);

				if (isHost()) {
					get(dealer).shoot(transfer.player, transfer.action.shoot.target);
				}

				get(mirror).hostHandsaw = false;
				get(mirror).clientHandsaw = false;
			} else if (transfer.action.shoot.shell !== undefined) {
				get(mirror).saveShell(transfer.action.shoot.shell, flushBacklog);
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

				if (transfer.action.item.use == 'handcuffs') {
					transfer.player == 'host'
						? (get(mirror).clientHandcuffs = true)
						: (get(mirror).hostHandcuffs = true);
				} else if (transfer.action.item.use == 'handsaw') {
					transfer.player == 'host'
						? (get(mirror).hostHandsaw = true)
						: (get(mirror).clientHandsaw = true);
				}

				if (transfer.action.item.use == 'adrenaline') {
					transfer.player == 'host'
						? (get(mirror).hostAdrenaline = true)
						: (get(mirror).clientAdrenaline = true);
				} else {
					transfer.player == 'host'
						? (get(mirror).hostAdrenaline = false)
						: (get(mirror).clientAdrenaline = false);
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
			message: { message }
		});
	} else {
		sendMessage({
			player,
			message: { message }
		});
	}
}

export function read(transfer: Transfer) {
	if (get(mirror)?.gameOver) return;

	if (get(mirror)?.animating) {
		// console.log(`Animating; ${JSON.stringify(transfer)}`);
		if (transfer.action?.shoot?.shell !== undefined) {
			// interpret
		} else {
			console.log(`Currently animating, adding to backlog: ${JSON.stringify(transfer)}`);
			backlog.push(transfer);
			return;
		}
	}

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
			m.saveMessage(transfer.message as TransferMessage);
			return m;
		});
	} else {
		throw new Error('No action found in transfer');
	}

	broadcastState(transfer);
}

function flushBacklog() {
	// keep removing from the top of the backlog until another animation
	console.warn('Flushing backlog');

	while (backlog.length > 0) {
		if (!get(mirror).animating) {
			const transfer = backlog.shift() as Transfer;
			read(transfer);
		} else {
			break;
		}
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

	console.log(transfer);
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
