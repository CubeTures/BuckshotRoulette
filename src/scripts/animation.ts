import SS1 from '$lib/assets/animations/SelfSelf/SS1P.png';
import SS2 from '$lib/assets/animations/SelfSelf/SS2P.png';
import SS3 from '$lib/assets/animations/SelfSelf/SS3P.png';
import SS4 from '$lib/assets/animations/SelfSelf/SS4P.png';

import SO1 from '$lib/assets/animations/SelfOpponent/SO1P.png';
import SO2 from '$lib/assets/animations/SelfOpponent/SO2P.png';
import SO3 from '$lib/assets/animations/SelfOpponent/SO3P.png';
import SO4 from '$lib/assets/animations/SelfOpponent/SO4P.png';
import SO5 from '$lib/assets/animations/SelfOpponent/SO5P.png';

import OS1 from '$lib/assets/animations/OpponentSelf/OS1P.png';
import OS2 from '$lib/assets/animations/OpponentSelf/OS2P.png';
import OS3 from '$lib/assets/animations/OpponentSelf/OS3P.png';
import OS4 from '$lib/assets/animations/OpponentSelf/OS4P.png';
import OS5 from '$lib/assets/animations/OpponentSelf/OS5P.png';

import OO1 from '$lib/assets/animations/OpponentOpponent/OO1P.png';
import OO2 from '$lib/assets/animations/OpponentOpponent/OO2P.png';
import OO3 from '$lib/assets/animations/OpponentOpponent/OO3P.png';
import OO4 from '$lib/assets/animations/OpponentOpponent/OO4P.png';
import OO5 from '$lib/assets/animations/OpponentOpponent/OO5P.png';
import type { Animation } from '../interfaces/gameInterfaces';

const ss = [SS1, SS2, SS3, SS4];
const so = [SO1, SO2, SO3, SO4, SO5];
const os = [OS1, OS2, OS3, OS4, OS5];
const oo = [OO1, OO2, OO3, OO4, OO5];

export function getFrame(animation: Animation, frame: number = 0): string {
	switch (animation) {
		case 'SelfSelf':
			return getFrameHelper(ss, frame);
		case 'SelfOpponent':
			return getFrameHelper(so, frame);
		case 'OpponentSelf':
			return getFrameHelper(os, frame);
		case 'OpponentOpponent':
			return getFrameHelper(oo, frame);
	}
}

function getFrameHelper(frames: string[], frame: number): string {
	return frames[Math.max(frame, frames.length - 1)];
}

export function animationDone(animation: Animation, frame: number): boolean {
	switch (animation) {
		case 'SelfSelf':
			return frame == 4;
		default:
			return frame == 5;
	}
}
