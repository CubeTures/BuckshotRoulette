import type { Item } from '../interfaces/gameInterfaces';

export default class Player {
	health: number;
	items: Item[];

	private readonly maxItems: number = 8;

	constructor() {
		this.health = 2;
		this.items = [];
	}

	addItem(item: Item) {
		this.items.push(item);
	}

	atMaxItems(): boolean {
		return this.items.length == this.maxItems;
	}

	takeDamage(health: number) {
		this.health -= health;
	}
}
