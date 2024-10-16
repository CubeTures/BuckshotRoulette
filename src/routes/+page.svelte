<script lang="ts">
	import Broker from '../components/broker.svelte';
	import Room from '../components/room.svelte';
	import Transfer from '../components/transfer.svelte';
	import { connected } from '../scripts/store';
</script>

<div style="gap: 12px; display: flex; flex-direction: column">
	<h1>Buckshot Roulette</h1>
	<Broker />
	<Room />

	{#if $connected}
		<Transfer />
	{:else}
		<p>No connection</p>
	{/if}
</div>
