export function coinFlip(): boolean {
	return Math.random() < 0.5;
}

export function randInt(max: number, min?: number) {
	if (min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	} else {
		return Math.floor(Math.random() * (max + 1));
	}
}
