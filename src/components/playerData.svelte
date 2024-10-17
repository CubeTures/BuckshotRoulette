<script lang="ts">
	import type { Target } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';
	import ItemContainer from './itemContainer.svelte';

	export let target: Target;
	export let myTurn: boolean;

	$: health = (target == 'self') == $host ? $mirror.pHost.health : $mirror.pClient.health;
	$: items = (target == 'self') == $host ? $mirror.pHost.items : $mirror.pClient.items;
</script>

{#if $mirror}
	<p>Health: {health}</p>
	<ItemContainer {items} {myTurn} />
{/if}
