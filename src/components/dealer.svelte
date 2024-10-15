<script lang="ts">
	import Dealer from '../scripts/dealer';
	import { connected, dealer, isHost } from '../scripts/store';

	connected.subscribe((isConnected) => {
		if (isConnected && isHost()) {
			dealer.set(new Dealer());
		}
	});
</script>
