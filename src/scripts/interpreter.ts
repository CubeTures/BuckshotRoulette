import type { Transfer } from '../interfaces/rtcInterfaces';

export function write(transfer: Transfer) {
	// try to complete an action
}

export function read(message: string) {
	const transfer = parse(message);

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

function parse(message: string): Transfer {
	return JSON.parse(message);
}
