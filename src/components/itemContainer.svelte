<script lang="ts">
	import type { Item as It, Target } from '../interfaces/gameInterfaces';
	import Item from './item.svelte';

	export let items: It[];
	export let myTurn: boolean;
	export let target: Target;
</script>

<div style="display: flex; gap: 4px">
	{#each items as item}
		<Item {item} {myTurn} {target} />
	{/each}
</div>
