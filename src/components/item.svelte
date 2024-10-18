<script lang="ts">
	import type { Item, PlayerData, Target } from '../interfaces/gameInterfaces';
	import { capitalize } from '../scripts/helper';
	import { adrenaline, host, mirror } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	export let item: Item;
	export let myTurn: boolean;
	export let target: Target;

	function useItem() {
		Interpreter.act(Actions.UseItem(item));
	}

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
	$: validHandcuffs =
		item != 'handcuffs' || !($host ? $mirror.clientHandcuffs : $mirror.hostHandcuffs);
	// $: validAdrenaline =
	// 	item != 'adrenaline' ||
	// 	(opponentHandcuffed() ? opponentHasNonAdrenalineAndHandcuffs() : opponentHasNonAdrenaline());
	$: validAdrenaline =
		item != 'adrenaline' ||
		(($host ? $mirror.clientHandcuffs : $mirror.hostHandcuffs)
			? ($host ? $mirror.pClient : $mirror.pHost).items.some(
					(i) => i != 'adrenaline' && i != 'handcuffs'
				)
			: ($host ? $mirror.pClient : $mirror.pHost).items.some((i) => i != 'adrenaline'));
	$: adrenalineOpponent = $adrenaline && target == 'opponent';
	$: adrenalineSelf = $adrenaline && target == 'self';
	$: enabledSelf = myTurn && !adrenalineSelf && validHandcuffs && validAdrenaline;
	$: enabledOpponent = adrenalineOpponent && validHandcuffs && item != 'adrenaline';
	$: enabled = target == 'self' ? enabledSelf : enabledOpponent;

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
</script>

<button on:click={useItem} disabled={!enabled}>{capitalize(item)}</button>
