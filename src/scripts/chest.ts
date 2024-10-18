import {
	cumulativeWeights,
	getItem,
	items,
	numItems,
	totalWeight,
	type Item
} from '../interfaces/gameInterfaces';
import { coinFlip, randInt } from './helper';

const numberItems: number = numItems();

export function drawItem(): Item {
	// const index: number = randInt(numberItems - 1);
	// return getItem(index);
	return weightedRandom();
}

function weightedRandom(): Item {
	const random = Math.random() * totalWeight;

	for (let i = 0; i < cumulativeWeights.length; i++) {
		if (random < cumulativeWeights[i]) {
			return items[i];
		}
	}

	return items[0];
}
