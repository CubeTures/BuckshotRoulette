<script lang="ts">
	import { items, type Side } from '../interfaces/gameInterfaces';
	import '../styles/styles.sass';
	import SidebarItem from './sidebarItem.svelte';

	export let side: Side;
</script>

<div class="sidebar {side}">
	{#each items as item}
		{#if item != 'adrenaline'}
			<SidebarItem {item} {side} />
		{/if}
	{/each}
</div>
