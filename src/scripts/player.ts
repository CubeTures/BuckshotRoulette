import type { Item } from '../interfaces/gameInterfaces';

export default class Player {
	health: number;
	items: Item[];

	constructor() {
		this.health = 2;
		this.items = [];
	}

	addItem(item: Item) {
		this.items.push(item);
	}

	takeDamage(health: number) {
		this.health -= health;
	}
}
