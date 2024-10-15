<script lang="ts">
	import type { Target } from '../interfaces/gameInterfaces';
	import { mirror } from '../scripts/store';

	export let target: Target;
</script>

{#if $mirror}
	<p>Health: {$mirror.getHealth(target)}</p>
{/if}
