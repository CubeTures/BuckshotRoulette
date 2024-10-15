import { get } from 'svelte/store';
import { channel, connected, connection, preset } from './store';
import type { Transfer } from '../interfaces/rtcInterfaces';
import { Interpreter } from './types';

export function createChannel() {
	let unsubscribe: () => void;
	unsubscribe = connection.subscribe((pc) => {
		if (pc) {
			setChannel(pc);
			unsubscribe();
		}
	});
}

function setChannel(pc: RTCPeerConnection) {
	console.log('Creating Data Channel');
	const c = pc.createDataChannel('game', { negotiated: true, id: 9 });
	listenToChannel(c);
}

function listenToChannel(c: RTCDataChannel) {
	console.log('Setting Up Listeners');

	c.addEventListener('open', onOpen);
	c.addEventListener('message', onMessage);
	c.addEventListener('close', onClose);

	channel.set(c);
}

function onOpen() {
	connected.set(true);
}

function onClose() {
	connected.set(false);
}

function onMessage(event: MessageEvent) {
	const data = event.data;
	const transfer: Transfer = Interpreter.parse(data);
	Interpreter.read(transfer);
}

export function sendMessage(transfer: Transfer) {
	const c = get(channel);
	const data = JSON.stringify(transfer);
	c.send(data);
}
