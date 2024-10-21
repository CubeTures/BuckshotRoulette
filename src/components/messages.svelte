<script lang="ts">
	import { mirror } from '../scripts/store';

	let message: string = '';
	let backlog: string[] = [];

	mirror.subscribe((m) => {
		m.subscribeOnMessage(addToBacklog);
	});

	function addToBacklog(message: string) {
		backlog.push(message);
		readOffBacklog();
	}

	function readOffBacklog() {
		if (backlog.length == 0) {
			message = '';
			return;
		}

		message = backlog.shift() as string;

		setTimeout(readOffBacklog, 5000);
	}
</script>

{#if message}
	<div class="container message">
		<h1>{message}</h1>
	</div>
{/if}
