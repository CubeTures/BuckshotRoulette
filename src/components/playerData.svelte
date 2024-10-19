<script lang="ts">
	import type { Target } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';

	export let target: Target;

	$: health = (target == 'self') == $host ? $mirror.pHost.health : $mirror.pClient.health;
	$: items = (target == 'self') == $host ? $mirror.pHost.items : $mirror.pClient.items;
</script>

{#if $mirror}
	<p>Health: {health}</p>
{/if}
