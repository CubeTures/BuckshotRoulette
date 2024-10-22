<script lang="ts">
	import type { PartialTransfer } from '../interfaces/rtcInterfaces';
	import { adrenaline, host, mirror, receivedActions, sentActions } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';
	import '../styles/styles.sass';
	import Dealer from './dealer.svelte';
	import PlayerData from './playerData.svelte';

	function act(partial: PartialTransfer) {
		Interpreter.act(partial);
	}

	$: myTurn = $mirror?.activePlayer ? ($mirror.activePlayer == 'host') == $host : false;
	$: stage = $mirror?.stage ? $mirror.stage : 0;
	$: messages = $mirror?.messages ? $mirror.messages : [];
</script>

<Dealer />

<!-- <div class="container">
	{#each messages as message}
		<p>{message}</p>
	{/each}
</div> -->

<!-- <div class="container">
	<p>You</p>
	<button on:click={() => act(Actions.ShootSelf)} disabled={!myTurn}>Shoot Self</button>
	<button on:click={() => act(Actions.ShootOpponent)} disabled={!myTurn}>Shoot Opponent</button>
</div>

{#if $mirror}
	<div class="container">
		<p>Host Handcuffed: {$mirror.hostHandcuffs}</p>
		<p>Client Handcuffed: {$mirror.clientHandcuffs}</p>
		<p>Adrenaline: {$adrenaline ? true : false}</p>
	</div>
{/if} -->

<!-- <div class="container">
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
</div> -->
