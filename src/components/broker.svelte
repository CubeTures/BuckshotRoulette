<script lang="ts">
	import { onMount } from 'svelte';
	import { connection, preset } from '../scripts/store';

	const servers = {
		iceServers: [
			{
				urls: [
					'stun:stun.l.google.com:19302',
					'stun:stun.l.google.com:5349',
					'stun:stun1.l.google.com:3478',
					'stun:stun1.l.google.com:5349',
					'stun:stun2.l.google.com:19302',
					'stun:stun2.l.google.com:5349',
					'stun:stun3.l.google.com:3478',
					'stun:stun3.l.google.com:5349',
					'stun:stun4.l.google.com:19302',
					'stun:stun4.l.google.com:5349'
				]
			}
		],
		iceCandidatePoolSize: 10
	};

	onMount(() => {
		if (!$connection) {
			const pc = new RTCPeerConnection(servers);
			connection.set(pc);
		}
	});
</script>
