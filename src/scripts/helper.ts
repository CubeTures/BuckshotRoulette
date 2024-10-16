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

export function capitalize(str: string) {
	return str
		.split('_')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
}
