import { get, writable } from 'svelte/store';
import type Dealer from './dealer';
import type { RoomPreset } from '../interfaces/gameInterfaces';

export const preset = writable<RoomPreset>();
export const connection = writable<RTCPeerConnection>();
export const channel = writable<RTCDataChannel>();
export const connected = writable<boolean>(false);

export const host = writable<boolean>(false);
export function isHost(): boolean {
	return get(host);
}

export const dealer = writable<Dealer>();
