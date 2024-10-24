<script>
	import { host, mirror } from '../scripts/store';
	import Container from './container.svelte';
	import HealthBar from './healthBar.svelte';
	import Round from './round.svelte';
	import Shells from './shells.svelte';

	$: showWins = $mirror ? $mirror.stage > 0 : false;
	$: youWins = showWins ? ($host ? $mirror.hostWins : $mirror.clientWins) : 0;
	$: opponentWins = showWins ? ($host ? $mirror.clientWins : $mirror.hostWins) : 0;
</script>

<div class="header">
	<div style="display:grid; grid-template-columns: repeat(3, 1fr)">
		<div style="display: flex">
			<Container><h1>You {showWins ? `(${youWins}/2 wins)` : ''}</h1></Container>
		</div>
		<div style="display: flex; justify-content: center"><Round /></div>
		<div style="display: flex; flex-direction: row-reverse">
			<Container><h1>{showWins ? `(${opponentWins}/2 wins)` : ''} Opponent</h1></Container>
		</div>
	</div>

	{#if !$mirror?.gameOver}
		<div class="row">
			<HealthBar target="self" />
			<Shells />
			<HealthBar target="opponent" />
		</div>
	{/if}
</div>
