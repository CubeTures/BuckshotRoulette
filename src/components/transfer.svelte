<script lang="ts">
	import { createChannel, sendMessage } from '../scripts/channel';

	let text = '';
	let received: string = '';
	let input: HTMLInputElement;
	let open: boolean = false;

	function onOpen() {
		console.log('open channel');
		open = true;
	}

	function onClose() {
		console.log('close channel');
		open = false;
	}

	function onMessage(message: string) {
		console.log('receive');
		received += message + '\n';
	}

	function send() {
		console.log('send');
		sendMessage(text);
	}

	createChannel(onOpen, onMessage, onClose);
</script>

{#if open}
	<div style="border: 1px dashed black">
		<p>Send Messages</p>
		<input type="text" bind:value={text} bind:this={input} />
		<button on:click={send}>Send Message</button>
		<p>Received Messages</p>
		<textarea bind:value={received} disabled />
	</div>
{/if}
