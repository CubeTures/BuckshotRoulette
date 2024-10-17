import type { Item } from '../interfaces/gameInterfaces';
import type { PartialTransfer } from '../interfaces/rtcInterfaces';

export const ShootSelf: PartialTransfer = {
	action: {
		shoot: {
			target: 'self'
		}
	}
};

export const ShootOpponent: PartialTransfer = {
	action: {
		shoot: {
			target: 'opponent'
		}
	}
};

export const UseItem = (item: Item): PartialTransfer => ({
	action: {
		item: {
			use: item
		}
	}
});
