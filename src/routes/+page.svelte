<script lang="ts">
	import Background from '../components/background.svelte';
	import Broker from '../components/broker.svelte';
	import Curtain from '../components/curtain.svelte';
	import Room from '../components/room.svelte';
	import Sidebar from '../components/sidebar.svelte';
	import Title from '../components/title.svelte';
	import Transfer from '../components/transfer.svelte';
	import { connected } from '../scripts/store';
</script>

<Curtain />
<Sidebar side={'left'} />
<Sidebar side={'right'} />
<Background />

<div class="main-content">
	{#if !$connected}
		<Title />
		<Broker />
		<Room />
	{/if}

	{#if $connected}
		<Transfer />
	{/if}
</div>
