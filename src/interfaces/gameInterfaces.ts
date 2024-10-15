const items = [
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
