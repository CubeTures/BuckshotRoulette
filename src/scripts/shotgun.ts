import { coinFlip, randInt } from './helper';

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
		const end = this.shells.length - 1;
		const shell: boolean = this.shells[end];
		this.shells.pop();
		return shell;
	}

	isEmpty() {
		return !this.shells.includes(true);
	}

	private getNumLiveShells(numShells: number) {
		return Math.ceil(numShells / 2);
	}
}
