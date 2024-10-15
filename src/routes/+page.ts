import type { PlayerType } from '../interfaces/gameInterfaces';
import { preset } from '../scripts/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const params = url.searchParams;
	let id = params.get('id');
	let role = params.get('role');

	if (id && role) {
		preset.set({
			id,
			role: role as PlayerType
		});
	}
};
