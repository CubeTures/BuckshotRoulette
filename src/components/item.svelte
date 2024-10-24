<script lang="ts">
	import type { Item, Side, Target } from '../interfaces/gameInterfaces';
	import { getImage } from '../scripts/itemToImage';
	import { adrenaline, host, mirror } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	export let item: Item;
	export let side: Side;
	const target: Target = side == 'left' ? 'self' : 'opponent';

	function useItem() {
		console.log(`Use ${item}`);
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
	$: myTurn = $mirror?.activePlayer ? ($mirror.activePlayer == 'host') == $host : false;
	$: enabledSelf = myTurn && !adrenalineSelf && validHandcuffs && validAdrenaline;
	$: enabledOpponent = adrenalineOpponent && validHandcuffs && item != 'adrenaline';
	$: enabled = !$mirror.gameOver && (target == 'self' ? enabledSelf : enabledOpponent);
</script>

<button
	class="item"
	style="background-image: url({getImage(item)})"
	disabled={!enabled}
	on:click={useItem}
></button>
