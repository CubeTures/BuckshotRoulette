// unused item logic

// Valid Cuffs: Whether or not the player can use handcuffs
// Cannot be used if opponent is handcuffed

// Valid Adrenaline: Whether or not an item is valid
// Can only be used if the opponent has an item other than adrenaline
// (or other than adrenaline and handcuffs when the opponent is handcuffed)

// Adrenaline Opponent:
// Can use any of the opponent's items when adrenaline is active

// Adrenaline Self:
// You cannot use your own items if adrenaline is active

// My Turn
// Can only use your items if it is your turn

// Enabled for your own items
// myTurn && !adrenalineSelf && validCuffs && validAdrenaline

// Enabled for opponent items
// myTurn && adrenalineOpponent && validCuffs && (item != adrenaline)

// $: validHandcuffs = item != 'handcuffs' || !opponentHandcuffed();

// $: validAdrenaline =
// 	item != 'adrenaline' ||
// 	(opponentHandcuffed() ? opponentHasNonAdrenalineAndHandcuffs() : opponentHasNonAdrenaline());

// $: opponentHandcuffed;
// function opponentHandcuffed() {
// 	return $host ? $mirror.clientHandcuffs : $mirror.hostHandcuffs;
// }

// $: opponentHasNonAdrenaline;
// function opponentHasNonAdrenaline(): boolean {
// 	return getOpponent().items.some((i) => i != 'adrenaline');
// }

// $: opponentHasNonAdrenalineAndHandcuffs;
// function opponentHasNonAdrenalineAndHandcuffs(): boolean {
// 	return getOpponent().items.some((i) => i != 'adrenaline' && i != 'handcuffs');
// }

// $: getOpponent;
// function getOpponent(): PlayerData {
// 	return $host ? $mirror.pClient : $mirror.pHost;
// }

// $: getFlagString;
// function getFlagString(): string {
// 	let flags: string = '';
// 	let enables: string = '';

// 	if (validHandcuffs) {
// 		flags += 'H';
// 	}
// 	if (validAdrenaline) {
// 		flags += 'A';
// 	}
// 	if (myTurn) {
// 		flags += 'T';
// 	}
// 	if (adrenalineOpponent) {
// 		flags += 'O';
// 	}
// 	if (adrenalineSelf) {
// 		flags += 'S';
// 	}

// 	if (enabledOpponent) {
// 		enables += 'O';
// 	}
// 	if (enabledSelf) {
// 		enables += 'S';
// 	}
// 	if (enabled) {
// 		enables += 'E';
// 	}

// 	return `${flags ? ' ' : ''}${flags ? `(${flags})` : ''}${flags || enables ? ' ~ ' : ''}${enables ? `(${enables})` : ''}`;
// }
