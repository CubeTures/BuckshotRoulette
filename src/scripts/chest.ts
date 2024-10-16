import { getItem, numItems, type Item } from '../interfaces/gameInterfaces';
import { randInt } from './helper';

const numberItems: number = numItems();

export function drawItem(): Item {
	const index: number = randInt(numberItems - 1);
	return getItem(index);
}
