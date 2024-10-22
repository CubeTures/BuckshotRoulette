<script lang="ts">
	import handcuffs from '$lib/assets/items/Handcuffs.png';
	import adrenaline from '$lib/assets/items/Adrenaline.png';
	import handsaw from '$lib/assets/items/Handsaw.png';
	import type { Target } from '../interfaces/gameInterfaces';
	import { host, mirror } from '../scripts/store';

	export let target: Target;

	$: hasHandcuffs = (target == 'self') == $host ? $mirror.hostHandcuffs : $mirror.clientHandcuffs;
	$: hasAdrenaline = false;
	$: hasHandsaw = false;
</script>

<!-- {#if hasHandcuffs || hasAdrenaline || hasHandsaw} -->
<div>
	<div class="container" style="display: flex; flex-direction: column; gap: 12px">
		<img
			src={handcuffs}
			alt="handcuffs"
			class="item condition"
			style="cursor: default !important"
		/>
		<img src={adrenaline} alt="handcuffs" class="item condition" />
		{#if hasHandcuffs}
			<img
				src={handcuffs}
				alt="handcuffs"
				class="item condition"
				style="cursor: default !important"
			/>
		{/if}
	</div>
</div>
<!-- {/if} -->
