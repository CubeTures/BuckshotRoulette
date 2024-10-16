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
	stage?: number;
}

export type PartialTransfer =
	| { state: TransferState }
	| { action: TransferAction }
	| { message: string };

export interface TransferState extends PlayerData {
	turn: PlayerType;
}

export interface TransferAction {
	item?: {
		use?: Item;
		draw?: Item;
	};
	shoot?: {
		target: Target;
	};
}
