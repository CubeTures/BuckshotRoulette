import type { TransferState } from './rtcInterfaces';

export const items = [
	'magnifying_glass',
	'cigarette_pack',
	'can_of_beer',
	'handsaw',
	'handcuffs',
	'burner_phone',
	'inverter',
	'adrenaline',
	'expired_medicine'
] as const;
export const weights = [5, 5, 5, 5, 5, 3, 1, 3, 0];
export const cumulativeWeights = weights.reduce<number[]>(
	(acc, w, i) => [...acc, (acc[i - 1] || 0) + w],
	[]
);
export const totalWeight = weights.reduce((a, b) => a + b, 0);
export type Item = (typeof items)[number];
export function numItems(): number {
	return items.length;
}
export function getItem(index: number) {
	return items[index];
}

export type PlayerType = 'host' | 'client';
export type Target = 'self' | 'opponent';

export function getOtherPlayer(player: PlayerType): PlayerType {
	if (player === 'host') {
		return 'client';
	}

	return 'host';
}

export interface RoomPreset {
	id: string;
	role: PlayerType;
}

export interface GameState {
	host: TransferState;
	client: TransferState;
}

export interface PlayerData {
	health: number;
	items: Item[];
}

export type Side = 'left' | 'right';

export type Animation = 'SelfSelf' | 'SelfOpponent' | 'OpponentSelf' | 'OpponentOpponent' | 'Live';
