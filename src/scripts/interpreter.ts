import type { Writable } from 'svelte/store';
import type { Transfer } from '../interfaces/rtcInterfaces';
import { isHost, receivedActions, sentActions } from './store';

export function read(transfer: Transfer) {
	setLog(transfer);
	if (transfer.state) {
		// save the state in the mirror
	} else if (transfer.action) {
		// process action
		// respond with a state update for mirror
		// play animation
	} else if (transfer.message) {
		// display the message
	} else {
		console.error('No action found in transfer');
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
	log.update((l) => {
		l.push(pretty(transfer));
		return l;
	});
}

export function parse(message: string): Transfer {
	return JSON.parse(message);
}

export function pretty(transfer: Transfer): string {
	return JSON.stringify(transfer, null, 2);
}
