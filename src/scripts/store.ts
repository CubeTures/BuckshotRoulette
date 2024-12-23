import { get, writable } from 'svelte/store';
import type Dealer from './dealer';
import type { RoomPreset } from '../interfaces/gameInterfaces';
import buckshot from '$lib/assets/icons/Buckshot.png';
import type Mirror from './mirror';

export const preset = writable<RoomPreset>();
export const connection = writable<RTCPeerConnection>();
export const channel = writable<RTCDataChannel>();
export const connected = writable<boolean>(false);

export const host = writable<boolean>(false);
export function isHost(): boolean {
	return get(host);
}

export const dealer = writable<Dealer>();
export const mirror = writable<Mirror>();
export const frame = writable<string>(buckshot);
export const sentActions = writable<string[]>([]);
export const receivedActions = writable<string[]>([]);

export const adrenaline = writable<boolean>(false);
