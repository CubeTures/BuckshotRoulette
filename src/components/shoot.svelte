<script lang="ts">
	import buckshot from '$lib/assets/icons/Buckshot.png';
	import { blur, draw, fade, scale, slide } from 'svelte/transition';
	import type { PartialTransfer } from '../interfaces/rtcInterfaces';
	import { host, mirror } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	let ready: boolean = false;
	$: myTurn = $mirror?.activePlayer ? ($mirror.activePlayer == 'host') == $host : false;

	function aim() {
		ready = !ready;
	}

	function act(partial: PartialTransfer) {
		ready = false;
		Interpreter.act(partial);
	}

	$: unready;
	function unready() {
		if (!myTurn) {
			ready = false;
		}
	}
</script>

<button
	class="container"
	style="display: flex; flex-direction: column; cursor: pointer; align-items: center; transition: all 1s"
	on:click={aim}
	disabled={!myTurn}
	transition:blur
>
	<img src={buckshot} alt="shoot" class="buckshot" />

	{#if myTurn}
		<div style="margin-top: 12px">
			<button class="room-button" on:click={() => act(Actions.ShootSelf)} disabled={!myTurn}
				>YOU</button
			>
			<button class="room-button" on:click={() => act(Actions.ShootOpponent)} disabled={!myTurn}
				>OPPONENT</button
			>

			<h1
				style="align-self: center; text-align: center; padding: 12px; color: white; padding-top: 0px"
			>
				Shooting yourself with a blank grants an extra turn.
			</h1>
		</div>
	{/if}
</button>

<style lang="sass">
	.buckshot
		filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(219deg) brightness(108%) contrast(101%)
</style>
