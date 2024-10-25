<script lang="ts">
	import type { Target } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';
	import charge from '$lib/assets/icons/Charge.png';
	import { blur, slide } from 'svelte/transition';

	export let target: Target;

	$: count = $mirror
		? (target == 'self') == $host
			? $mirror.pHost.health
			: $mirror.pClient.health
		: 2;

	const size = 40;
</script>

<div class="charge-container {target == 'self' ? '' : 'right'}" style="min-width:{size * 5}px">
	{#each Array(count) as i}
		<img src={charge} alt="charge" height={size} width={size} class="icon" transition:blur />
	{/each}
</div>
