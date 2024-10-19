<script lang="ts">
	import type { Item as It, Side } from '../interfaces/gameInterfaces';
	import { capitalize } from '../scripts/helper';
	import { getDescription, getImage } from '../scripts/itemToImage';
	import Item from './item.svelte';

	export let item: It;
	export let side: Side;
</script>

<div class="item-container">
	<Item {item} {side} />
	<div class="item-text">
		<p>{capitalize(item)}: {getDescription(item)}</p>
	</div>
</div>
