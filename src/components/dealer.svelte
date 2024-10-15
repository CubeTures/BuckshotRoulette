<script lang="ts">
	import Dealer from '../scripts/dealer';
	import Mirror from '../scripts/mirror';
	import { connected, dealer, isHost, mirror } from '../scripts/store';

	connected.subscribe((isConnected) => {
		if (isConnected && isHost()) {
			dealer.set(new Dealer());
		}
	});

	mirror.set(new Mirror());
</script>
