<script lang="ts">
	import handcuffs from '$lib/assets/items/handcuffs_.png';
	import adrenaline from '$lib/assets/items/adrenaline_.png';
	import handsaw from '$lib/assets/items/handsaw_.png';
	import type { Target } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';
	import { slide } from 'svelte/transition';

	export let target: Target;

	$: hasHandcuffs = (target == 'self') == $host ? $mirror.hostHandcuffs : $mirror.clientHandcuffs;
	$: hasAdrenaline =
		(target == 'self') == $host ? $mirror.hostAdrenaline : $mirror.clientAdrenaline;
	$: hasHandsaw = (target == 'self') == $host ? $mirror.hostHandsaw : $mirror.clientHandsaw;
</script>

<div style="visibility: {hasHandcuffs || hasAdrenaline || hasHandsaw ? 'visible' : 'hidden'}">
	<div class="condition-container" transition:slide>
		{#if hasHandcuffs}
			<img
				src={handcuffs}
				alt="handcuffs"
				class="item condition"
				style="cursor: default !important"
				transition:slide
			/>
		{/if}
		{#if hasHandsaw}
			<img
				src={handsaw}
				alt="handsaw"
				class="item condition"
				style="cursor: default !important"
				transition:slide
			/>
		{/if}
		{#if hasAdrenaline}
			<img
				src={adrenaline}
				alt="adrenaline"
				class="item condition"
				style="cursor: default !important"
				transition:slide
			/>
		{/if}
	</div>
</div>
