<script lang="ts">
	import type { PartialTransfer } from '../interfaces/rtcInterfaces';
	import { createChannel } from '../scripts/channel';
	import { connected, receivedActions, sentActions } from '../scripts/store';
	import { Actions, Router } from '../scripts/types';
	import '../styles/styles.sass';

	function act(partial: PartialTransfer) {
		console.log('Send');
		Router.act(partial);
	}

	createChannel();
</script>

<!-- {#if true}
	<div class="container">
		<p>Send Messages</p>
		<input type="text" bind:value={text} />
		<button on:click={send}>Send Message</button>
		<p>Received Messages</p>
		<textarea bind:value={received} disabled />
	</div>
{/if} -->

{#if $connected}
	<div class="container">
		<p>You</p>
		<button on:click={() => act(Actions.ShootSelf)}>Shoot Self</button>
		<button on:click={() => act(Actions.ShootOpponent)}>Shoot Opponent</button>
	</div>

	<div class="container">
		<p>Opponent</p>
	</div>

	<div class="container">
		<p>Sent</p>
		{#each $sentActions as action}
			<p>{action}</p>
		{/each}
	</div>

	<div class="container">
		<p>Received</p>
		{#each $receivedActions as action}
			<p>{action}</p>
		{/each}
	</div>
{/if}
