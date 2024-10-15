import { get } from 'svelte/store';
import { connection, preset } from '../scripts/store';
import { onMount } from 'svelte';

export default function usePreset(callback: () => void) {
	let unsubscribePreset: () => void = () => {};
	let unsubscribeConnection: () => void = () => {};

	onMount(() => {
		unsubscribeConnection = connection.subscribe(() => {
			if (get(preset)) {
				console.log('Preset loaded');
				callback();
			} else {
				console.log('Waiting for preset');
				unsubscribePreset = preset.subscribe((p) => {
					if (p?.id && p?.role) {
						callback();
						unsubscribePreset();
					}
				});
			}

			unsubscribeConnection();
		});
	});
}
