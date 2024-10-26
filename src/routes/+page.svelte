<script lang="ts">
	import Background from '../components/background.svelte';
	import Broker from '../components/broker.svelte';
	import Center from '../components/center.svelte';
	import Header from '../components/header.svelte';
	import Log from '../components/log.svelte';
	import Messages from '../components/messages.svelte';
	import Room from '../components/room.svelte';
	import Sidebar from '../components/sidebar.svelte';
	import Title from '../components/title.svelte';
	import Transfer from '../components/transfer.svelte';
	import { connected } from '../scripts/store';
</script>

<Background />
{#if $connected}
	<Sidebar side={'left'} />
	<Sidebar side={'right'} />
{/if}

<div class="main-content">
	{#if !$connected}
		<Title />
		<Broker />
		<Room />
	{/if}

	{#if $connected}
		<Header />
		<Transfer />
		<Center />
		<Log />
		<Messages />
	{/if}
</div>
