<script lang="ts">
	import type { Item, Side } from '../interfaces/gameInterfaces';
	import { capitalize } from '../scripts/helper';
	import { getDescription, getImage } from '../scripts/itemToImage';

	export let item: Item;
	export let side: Side;
</script>

<div class="item-container">
	<button class="item {side}" style="background-image: url({getImage(item)})"></button>
	<div class="text">
		<p>{capitalize(item)}: {getDescription(item)}</p>
	</div>
</div>

<style lang="sass">
	@import "../styles/styles"

	.item-container
		display: flex
		justify-content: flex-start
		position: relative
		overflow: hidden
		height: calc((100dvh - (9 * 12px)) / 8)
		background-color: $darker-transparent
		border-radius: $border-radius * 2

	.text
		justify-content: center
		align-items: flex-start
		display: flex
		flex-direction: column
		padding: $padding
		font-size: 2rem
</style>
