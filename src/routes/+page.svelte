<script lang="ts">
	import Broker from '../components/broker.svelte';
	import Room from '../components/room.svelte';
	import Transfer from '../components/transfer.svelte';
</script>

<div style="gap: 12px; display: flex; flex-direction: column">
	<h1>Buckshot Roulette</h1>
	<Broker />
	<Room />
	<Transfer />
</div>
