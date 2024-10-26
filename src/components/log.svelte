<script>
	import { fade } from 'svelte/transition';
	import { mirror } from '../scripts/store';

	let visible = false;
	$: messages = $mirror?.messages ? $mirror.messages : [];

	function toggleVisible() {
		visible = !visible;
	}
</script>

<button class="log-button corner" on:click={toggleVisible} style="align-self: flex-end">Log</button>

{#if visible}
	<div class="log-container" transition:fade>
		{#each messages as message}
			<div class="container"><h1>{message}</h1></div>
		{/each}
		<button class="log-button" on:click={toggleVisible} style="align-self: flex-start">Back</button>
	</div>
{/if}
