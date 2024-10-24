<script lang="ts">
	import buckshot from '$lib/assets/icons/Buckshot.png';
	import type { PartialTransfer } from '../interfaces/rtcInterfaces';
	import { host, mirror } from '../scripts/store';
	import { Actions, Interpreter } from '../scripts/types';

	$: myTurn = $mirror?.activePlayer ? ($mirror.activePlayer == 'host') == $host : false;

	function act(partial: PartialTransfer) {
		Interpreter.act(partial);
	}
</script>

<div
	class="container"
	style="display: flex; flex-direction: column; cursor: pointer; align-items: center; transition: all 1s"
>
	{#if $mirror?.gameOver}
		<img src={$mirror.gameOverIcon} alt="gameOver" class="buckshot" />
	{:else}
		<img src={buckshot} alt="shoot" class="buckshot" />

		{#if myTurn}
			<div style="margin-top: 12px">
				<div style="display: flex; justify-content: center">
					<button class="room-button" on:click={() => act(Actions.ShootSelf)}>YOU</button>
					<button class="room-button" on:click={() => act(Actions.ShootOpponent)}>OPPONENT</button>
				</div>

				<h1
					style="align-self: center; text-align: center; padding: 12px; color: white; padding-top: 0px"
				>
					Shooting yourself with a blank grants an extra turn.
				</h1>
			</div>
		{/if}
	{/if}
</div>

<style lang="sass">
	.buckshot
		filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(219deg) brightness(108%) contrast(101%)
</style>
