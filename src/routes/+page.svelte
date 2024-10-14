<script lang="ts">
	import Broker from '../components/broker.svelte';
	import { acceptOffer, createOffer } from '../scripts/connection';

	let createId: string = '';
	let joinId: string = '';
	let doc;
	let errors: string[] = [];

	async function create() {
		doc = await createOffer();
		createId = doc.id;
	}

	async function answer() {
		await acceptOffer(joinId);
	}
</script>

<Broker />
<h1>Buckshot Roulette</h1>
<button on:click={create}>Create Connection</button>

<br />
<br />

<input type="text" placeholder="connection id" bind:value={joinId} />
<button on:click={answer}>Accept Offer</button>

{#if createId != ''}
	<p>Connection ID: {createId}</p>
{/if}

{#each errors as error}
	<p>{error}</p>
{/each}
