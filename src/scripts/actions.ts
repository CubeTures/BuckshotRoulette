import { get } from 'svelte/store';
import type { PartialTransfer, Transfer } from '../interfaces/rtcInterfaces';
import { host, isHost } from './store';

export const ShootSelf: PartialTransfer = {
	action: {
		shoot: {
			target: 'self',
			shell: true
		}
	}
};

export const ShootOpponent: PartialTransfer = {
	action: {
		shoot: {
			target: 'opponent',
			shell: true
		}
	}
};
