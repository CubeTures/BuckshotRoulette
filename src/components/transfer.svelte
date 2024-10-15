<script lang="ts">
	import type { PartialTransfer } from '../interfaces/rtcInterfaces';
	import { createChannel } from '../scripts/channel';
	import { connected } from '../scripts/store';
	import { Actions, Interpreter, Router } from '../scripts/types';
	import '../styles/styles.sass';

	let received: string = '';

	function onOpen() {
		console.log('Open Channel');
		connected.set(true);
	}

	function onClose() {
		console.log('Close Channel');
		connected.set(false);
	}

	function onMessage(message: string) {
		console.log('Receive');
		Interpreter.read(message);
		received += message + '\n';
	}

	function act(partial: PartialTransfer) {
		console.log('Send');
		Router.act(partial);
	}

	createChannel(onOpen, onMessage, onClose);
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
		<p>Received</p>
		<p>{received}</p>
	</div>
{/if}
