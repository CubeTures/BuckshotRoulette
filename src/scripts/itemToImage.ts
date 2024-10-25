// Original Edition
// import magnifying_glass from '$lib/assets/items/MagnifyingGlass.png';
// import cigarette_pack from '$lib/assets/items/CigarettePack.png';
// import can_of_beer from '$lib/assets/items/CanOfBeer.png';
// import handsaw from '$lib/assets/items/Handsaw.png';
// import handcuffs from '$lib/assets/items/Handcuffs.png';
// import burner_phone from '$lib/assets/items/BurnerPhone.png';
// import inverter from '$lib/assets/items/Inverter.png';
// import adrenaline from '$lib/assets/items/Adrenaline.png';
// import expired_medicine from '$lib/assets/items/ExpiredMedicine.png';

// New Edition
import magnifying_glass from '$lib/assets/items/magnifying_glass.png';
import cigarette_pack from '$lib/assets/items/cigarette_pack.png';
import can_of_beer from '$lib/assets/items/can_of_beer.png';
import handsaw from '$lib/assets/items/handsaw_.png';
import handcuffs from '$lib/assets/items/handcuffs_.png';
import burner_phone from '$lib/assets/items/burner_phone.png';
import inverter from '$lib/assets/items/inverter_.png';
import adrenaline from '$lib/assets/items/adrenaline_.png';
import expired_medicine from '$lib/assets/items/expired_medicine.png';
import type { Item } from '../interfaces/gameInterfaces';

const translate: Record<Item, string> = {
	magnifying_glass,
	cigarette_pack,
	can_of_beer,
	handsaw,
	handcuffs,
	burner_phone,
	inverter,
	adrenaline,
	expired_medicine
};

export function getImage(item: Item): string {
	return translate[item];
}

const descriptions: Record<Item, string> = {
	magnifying_glass: 'Check the current round in the chamber.',
	cigarette_pack: 'Take the edge off. Regain 1 Charge.',
	can_of_beer: 'Racks the shotgun. Ejects current shell.',
	handsaw: 'Shotgun deals 2 damage.',
	handcuffs: "Skips the opponent's next turn. Cannot be used in succession.",
	burner_phone: 'A mysterious voice gives you insight from the future.',
	inverter: 'Swap the polarity of the current shell in the chamber.',
	adrenaline: 'Steal an item and use it immediately. Cannot steal adrenaline.',
	expired_medicine: '50% chance to regain 2 Charges; 50% to lose 1 Charge.'
};

export function getDescription(item: Item): string {
	return descriptions[item];
}
