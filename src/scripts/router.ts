import type { PartialTransfer, Transfer } from '../interfaces/rtcInterfaces';
import { sendMessage } from './channel';
import { isHost } from './store';
import { Interpreter } from './types';

export function act(partial: PartialTransfer) {
	const transfer: Transfer = {
		player: isHost() ? 'host' : 'client',
		...partial
	};

	Interpreter.read(transfer);
	sendMessage(transfer);
}
