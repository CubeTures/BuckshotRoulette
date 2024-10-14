<script lang="ts">
	import { acceptOffer, createOffer } from '../scripts/connection';

	let createId: string = '';
	let joinId: string = '';
	let errors: string[] = [];

	async function create() {
		createId = (await createOffer()).id;
	}

	async function answer() {
		try {
			await acceptOffer(joinId);
		} catch (error) {
			errors.push('Room does not exist.');
		}
	}
</script>

<br />
<button on:click={create}>Create Room</button>
{#if createId != ''}
	<p>Room ID: {createId}</p>
{:else}
	<br />
{/if}

<button on:click={answer}>Join Room</button>
<input type="text" placeholder="connection id" bind:value={joinId} />

{#if errors.length > 0}
	{#each errors as error}
		<p>{error}</p>
	{/each}
{/if}
