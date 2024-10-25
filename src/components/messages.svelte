<script lang="ts">
	import { fly, slide } from 'svelte/transition';
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
		backlog.unshift(message);
		backlog = backlog;

		setTimeout(() => {
			backlog.pop();
			backlog = backlog;
		}, 5000);
	}
</script>

<div class="message" style="z-index: 100; display: flex; flex-direction: column-reverse">
	{#each backlog as b}
		<div class="container" in:fly|global out:slide|global style="margin-top: 12px">
			<h1>{b}</h1>
		</div>
	{/each}
</div>
