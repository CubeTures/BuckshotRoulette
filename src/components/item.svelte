<script lang="ts">
	import type { Item, Target } from '../interfaces/gameInterfaces';
	import { capitalize } from '../scripts/helper';
	import { host } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	export let item: Item;
	export let myTurn: boolean;

	function useItem() {
		Interpreter.act(Actions.UseItem(item));
	}
</script>

<button on:click={useItem} disabled={!myTurn}>{capitalize(item)}</button>
