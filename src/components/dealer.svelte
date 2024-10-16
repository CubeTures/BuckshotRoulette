<script lang="ts">
	import { get } from 'svelte/store';
	import Dealer from '../scripts/dealer';
	import Mirror from '../scripts/mirror';
	import { connected, dealer, isHost, mirror } from '../scripts/store';
	import { Interpreter } from '../scripts/types';
	import type { Transfer, TransferState } from '../interfaces/rtcInterfaces';
	import type { Item, PlayerType } from '../interfaces/gameInterfaces';

	mirror.set(new Mirror());

	connected.subscribe((isConnected) => {
		if (isConnected && isHost()) {
			dealer.set(new Dealer());
			Interpreter.broadcastStart();
			get(dealer).onDrawItem(onDrawItem);
			get(dealer).onStageChange(onStageChange);
		}
	});

	function onDrawItem(player: PlayerType, item: Item): void {
		const transfer: Transfer = {
			player,
			action: {
				item: {
					draw: item
				}
			}
		};

		Interpreter.act(transfer);
	}

	function onStageChange(player: PlayerType, state: TransferState, stage: number) {
		const transfer: Transfer = {
			player,
			state,
			stage
		};

		Interpreter.act(transfer);
	}
</script>
