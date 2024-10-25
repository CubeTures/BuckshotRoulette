<script lang="ts">
	import live from '$lib/assets/icons/Live.png';
	import blank from '$lib/assets/icons/Blank.png';
	import { mirror } from '../scripts/store';
	import { blur, fade } from 'svelte/transition';

	const size = 40;

	$: shells = $mirror?.shells ? $mirror.shells : [];
</script>

{#if shells.length > 0}
	<div
		class="container"
		style="width: {size * 8}px; min-height: {size}px; display: flex; justify-content: center"
		transition:fade
	>
		{#each shells as shell}
			<img
				src={shell ? live : blank}
				alt={shell ? 'live' : 'blank'}
				width={size}
				height={size}
				class="icon"
				in:blur
			/>
		{/each}
	</div>
{/if}
