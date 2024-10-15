<script lang="ts">
	import usePreset from '../hooks/usePreset';
	import { acceptOffer, createOffer } from '../scripts/connection';
	import { host, preset } from '../scripts/store';
	import '../styles/styles.sass';

	let id: string = '';
	let errors: string[] = [];

	usePreset(loadPreset);
	async function loadPreset() {
		id = $preset.id;
		console.warn('Connecting using preset');

		if ($preset.role == 'host') {
			await createOffer(id);
		} else {
			await acceptOffer(id);
		}
	}

	async function create() {
		id = (await createOffer()).id;
	}

	async function answer() {
		try {
			await acceptOffer(id);
		} catch (error) {
			errors.push('Room does not exist.');
		}
	}
</script>

<div class="container">
	<input type="text" placeholder="Room ID" bind:value={id} disabled={$host} />
	<button on:click={create}>Host</button>
	<button on:click={answer}>Join</button>
</div>

{#if errors.length > 0}
	{#each errors as error}
		<p>{error}</p>
	{/each}
{/if}
