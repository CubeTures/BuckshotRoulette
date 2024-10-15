import type { Item, PlayerData, PlayerType, Target } from './gameInterfaces';

export interface Description {
	sdp: string | undefined;
	type: RTCSdpType;
}

export interface Transfer {
	player: PlayerType;
	state?: TransferState;
	action?: TransferAction;
	message?: string;
}

export type PartialTransfer =
	| { state: TransferState }
	| { action: TransferAction }
	| { message: string };

export type TransferState = PlayerData;

export interface TransferAction {
	item?: {
		use?: Item;
		draw?: Item;
	};
	shoot?: {
		target: Target;
	};
}
