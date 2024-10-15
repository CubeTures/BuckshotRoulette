import { get } from 'svelte/store';
import { channel, connected, connection } from './store';
import type { Transfer } from '../interfaces/rtcInterfaces';

export function createChannel(
	onOpen: (event: Event) => void,
	onMessage: (message: string) => void,
	onClose?: (even: Event) => void
) {
	let unsubscribe: () => void;
	unsubscribe = connection.subscribe((pc) => {
		if (pc) {
			setChannel(pc, onOpen, onMessage, onClose);
			unsubscribe();
		}
	});
}

function setChannel(
	pc: RTCPeerConnection,
	onOpen: (event: Event) => void,
	onMessage: (message: string) => void,
	onClose?: (even: Event) => void
) {
	console.log('Creating Data Channel');
	const c = pc.createDataChannel('game', { negotiated: true, id: 9 });
	listenToChannel(c, onOpen, onMessage, onClose);
}

function listenToChannel(
	c: RTCDataChannel,
	onOpen: (event: Event) => void,
	onMessage: (message: string) => void,
	onClose?: (even: Event) => void
) {
	console.log('Setting Up Listeners');

	c.addEventListener('open', onOpen);
	c.addEventListener('message', (event: MessageEvent) => {
		const data = event.data;
		onMessage(data);
	});
	onClose && c.addEventListener('close', onClose);

	channel.set(c);
}

export function sendMessage(transfer: Transfer) {
	const c = get(channel);
	const data = JSON.stringify(transfer);
	c.send(data);
}
