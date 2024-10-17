import { capitalize, coinFlip, randInt } from './helper';

export default class Shotgun {
	private shells!: boolean[];
	reloadStats!: string;

	private readonly minShells: number = 2;
	private readonly maxShells: number = 8;

	constructor() {
		this.reloadShotgun(6);
	}

	reloadShotgun(numShells: number = randInt(this.minShells, this.maxShells)) {
		this.shells = [];

		let live = this.getNumLiveShells(numShells);
		for (let i = 0; i < numShells; i++) {
			const left = numShells - 1 - i;

			if (live > 0 && live == left) {
				this.shells.push(true);
				live--;
			} else if (live > 0 && coinFlip()) {
				this.shells.push(true);
				live--;
			} else {
				this.shells.push(false);
			}
		}

		this.setReloadStats();
	}

	private setReloadStats(): void {
		const count = this.shells.length;
		const live = this.getNumLiveShells(count);
		const blank = count - live;

		const ls = live == 1 ? '' : 's';
		const bs = blank == 1 ? '' : 's';

		this.reloadStats = `${live} live round${ls}. ${blank} blank${bs}.`;
	}

	getShell(): boolean {
		return this.shells.shift() as boolean;
	}

	isEmpty() {
		return !this.shells.includes(true);
	}

	canOfBeer(): string {
		const shell = this.getShell();
		return `The skipped shell was ${this.getShellString(shell)}`;
	}

	magnifyingGlass(): string {
		const shell: boolean = this.shells[0];
		return `The current shell is ${this.getShellString(shell)}.`;
	}

	burnerPhone(): string {
		if (this.shells.length > 1) {
			const index = randInt(1, this.shells.length - 1);
			const shell = this.shells[index];
			const indexStr = this.getIndexString(index);
			return `${capitalize(indexStr)} shell... ${this.getShellString(shell)} round.`;
		} else {
			return 'There is no future to tell...';
		}
	}

	getIndexString(index: number): string {
		const i = index + 1;

		switch (i) {
			case 2:
				return 'second';
			case 3:
				return 'third';
			case 4:
				return 'fourth';
			case 5:
				return 'fifth';
			case 6:
				return 'sixth';
			case 7:
				return 'seventh';
			case 8:
				return 'eighth';
			default:
				throw new Error(`Index ${i} not accounted for`);
		}
	}

	getShellString(shell: boolean): string {
		return shell ? 'live' : 'blank';
	}

	private getNumLiveShells(numShells: number) {
		return Math.ceil(numShells / 2);
	}
}
