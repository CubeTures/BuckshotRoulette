import type { Item } from '../interfaces/gameInterfaces';

export default class Player {
	private health: number;
	private items: Item[];

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

	setHealth(health: number) {
		this.health = health;
	}

	getHealth(): number {
		return this.health;
	}
}
