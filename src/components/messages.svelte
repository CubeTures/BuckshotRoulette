<script lang="ts">
	import { fade } from 'svelte/transition';
	import { mirror } from '../scripts/store';

	let backlog: string[] = [];

	let unsubscribe: () => void;
	unsubscribe = mirror.subscribe((m) => {
		m.subscribeOnMessage(addToBacklog);

		if (unsubscribe) {
			unsubscribe();
		}
	});

	function addToBacklog(message: string) {
		backlog.push(message);
		backlog = backlog;

		setTimeout(() => {
			backlog.shift();
			backlog = backlog;
		}, 5000);
	}
</script>

<div class="message" style="z-index: 100; display: flex; flex-direction: column-reverse; gap: 12px">
	{#each backlog as b}
		<div class="container" transition:fade>
			<h1>{b}</h1>
		</div>
	{/each}
</div>
