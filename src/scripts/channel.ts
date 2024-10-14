import { get } from 'svelte/store';
import { channel, connected, connection } from './store';

export function createChannel(
	onOpen: (event: Event) => void,
	onMessage: (message: string) => void,
	onClose?: (even: Event) => void
) {
	let unsubscribe: () => void;
	unsubscribe = connected.subscribe((isConnected) => {
		if (isConnected) {
			setChannel(onOpen, onMessage, onClose);
			unsubscribe();
		}
	});
}

function setChannel(
	onOpen: (event: Event) => void,
	onMessage: (message: string) => void,
	onClose?: (even: Event) => void
) {
	console.log('Creating Data Channel');
	const pc = get(connection);
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

export function sendMessage(message: string) {
	const c = get(channel);
	c.send(message);
}
