<script>
	import Container from './container.svelte';
	import HealthBar from './healthBar.svelte';
	import Round from './round.svelte';
	import Shells from './shells.svelte';
</script>

<div class="header">
	<div style="display:grid; grid-template-columns: repeat(3, 1fr)">
		<div style="display: flex"><Container><h1>You</h1></Container></div>
		<div style="display: flex; justify-content: center"><Round /></div>
		<div style="display: flex; flex-direction: row-reverse">
			<Container><h1>Opponent</h1></Container>
		</div>
	</div>

	<div class="row">
		<HealthBar target="self" />
		<Shells />
		<HealthBar target="opponent" />
	</div>
</div>
