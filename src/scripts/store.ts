import { get, writable } from 'svelte/store';

export const connection = writable<RTCPeerConnection>();
export const connected = writable<boolean>(false);
export const channel = writable<RTCDataChannel>();

export const host = writable<boolean>(false);
export function isHost(): boolean {
	return get(host);
}
