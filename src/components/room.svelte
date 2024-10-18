<script lang="ts">
	import usePreset from '../hooks/usePreset';
	import { acceptOffer, createOffer } from '../scripts/connection';
	import { host, preset } from '../scripts/store';
	import '../styles/styles.sass';

	let viewId = false;
	let joining = false;

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
		viewId = true;
		id = (await createOffer()).id;
	}

	async function answer() {
		try {
			await acceptOffer(id);
		} catch (error) {
			errors.push('Room does not exist.');
		}
	}

	function toJoin() {
		viewId = true;
		joining = true;
	}

	function back() {
		viewId = false;
		joining = false;
	}
</script>

<div class="container" style="display:none"></div>

<div>
	{#if !viewId}
		<button on:click={create} class="room-button">Host</button>
		<button on:click={toJoin} class="room-button">Join</button>
	{/if}

	{#if viewId}
		<input class="room-button" type="text" placeholder="Room ID" bind:value={id} disabled={$host} />
		<br />
		<button on:click={back} class="room-button">Back</button>
		{#if joining}
			<button on:click={answer} class="room-button" disabled={id == ''}>Connect</button>
		{/if}
	{/if}
</div>

{#if errors.length > 0}
	{#each errors as error}
		<p>{error}</p>
	{/each}
{/if}
