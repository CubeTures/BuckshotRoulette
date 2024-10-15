import { getItem, numItems, type Item } from '../interfaces/gameInterfaces';
import { randInt } from './helper';

export default class Chest {
	private readonly numItems: number = numItems();

	drawItem(): Item {
		const index: number = randInt(this.numItems);
		return getItem(index);
	}
}
