<script lang="ts">
	import { slide } from 'svelte/transition';
	import { type Side } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';
	import '../styles/styles.sass';
	import SidebarItem from './sidebarItem.svelte';

	export let side: Side;

	$: items = $mirror
		? side == 'left'
			? $host
				? $mirror.pHost.items
				: $mirror.pClient.items
			: $host
				? $mirror.pClient.items
				: $mirror.pHost.items
		: [];
</script>

<div class="sidebar {side}" transition:slide|global={{ duration: 1000 }}>
	{#each items as item}
		<SidebarItem {item} {side} />
	{/each}
</div>
