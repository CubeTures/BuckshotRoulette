<script lang="ts">
	import { onMount } from 'svelte';
	import { channel, connection, preset } from '../scripts/store';
	import { createChannel } from '../scripts/channel';
	import { get } from 'svelte/store';

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
			console.log('Created PC');

			pc.addEventListener('connectionstatechange', (p) => {
				if (get(channel)) {
					console.log(`Connection state change: ${get(channel).readyState}`);
				} else {
					console.log(`Connection state change: ???`);
				}
			});
		}
	});

	// createChannel();
</script>
