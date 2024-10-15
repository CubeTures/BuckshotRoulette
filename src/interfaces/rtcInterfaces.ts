import type { Item, PlayerType, Target } from './gameInterfaces';

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

export interface TransferState {
	health: number;
	items: Item[];
}

export interface TransferAction {
	item?: {
		use?: Item;
		draw?: Item;
	};
	shoot?: {
		target: Target;
		shell: boolean;
	};
}
