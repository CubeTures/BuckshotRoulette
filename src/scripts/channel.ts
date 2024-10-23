import { get } from 'svelte/store';
import { channel, connected, connection } from './store';
import type { Transfer } from '../interfaces/rtcInterfaces';
import { Interpreter } from './types';

export function createChannel() {
	console.log('Waiting for Connection to Create Channel');

	let unsubscribe: () => void;
	unsubscribe = connection.subscribe((pc) => {
		console.log('Connection Notified');

		if (pc) {
			console.log('PC Set, Creating Channel');
			setChannel(pc);
			unsubscribe();
		} else {
			console.log('PC Not Set, Cannot Create Channel');
		}
	});
}

function setChannel(pc: RTCPeerConnection) {
	const c = pc.createDataChannel('game', { negotiated: true, id: 9 });
	listenToChannel(c);
}

function listenToChannel(c: RTCDataChannel) {
	c.addEventListener('open', onOpen);
	c.addEventListener('message', onMessage);
	c.addEventListener('close', onClose);

	channel.set(c);
}

function onOpen() {
	console.log('Connection Opened (Connected)');
	connected.set(true);
}

function onClose() {
	console.log('Connection Closed (!Connected)');
	connected.set(false);
}

function onMessage(event: MessageEvent) {
	console.log('Message received');
	const data = event.data;
	const transfer: Transfer = Interpreter.parse(data);
	Interpreter.read(transfer);
	return true;
}

export function sendMessage(transfer: Transfer) {
	const c = get(channel);
	const data = JSON.stringify(transfer);
	c.send(data);
}
