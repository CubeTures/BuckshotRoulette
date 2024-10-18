<script lang="ts">
	import type { Item, Target } from '../interfaces/gameInterfaces';
	import { capitalize } from '../scripts/helper';
	import { adrenaline } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	export let item: Item;
	export let myTurn: boolean;
	export let target: Target;

	function useItem() {
		Interpreter.act(Actions.UseItem(item));
	}

	$: adrenalineOpponent = $adrenaline && item != 'adrenaline';
	$: adrenalineSelf = $adrenaline && target == 'self';
</script>

<button on:click={useItem} disabled={!(myTurn || adrenalineOpponent) || adrenalineSelf}
	>{capitalize(item)} ({myTurn ? 'T' : ''}{adrenalineOpponent ? 'O' : ''}{adrenalineSelf
		? 'S'
		: ''})</button
>
