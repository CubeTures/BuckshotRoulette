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

	$: validHandcuffs =
		item != 'handcuffs' || !($host ? $mirror.clientHandcuffs : $mirror.hostHandcuffs);

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
</script>

<button on:click={useItem} disabled={!enabled}>{capitalize(item)}</button>
