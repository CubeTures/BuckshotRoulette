import {
	addDoc,
	collection,
	doc,
	DocumentReference,
	getDoc,
	getFirestore,
	type DocumentData
} from 'firebase/firestore';
import app from './firebase';

const firestore = getFirestore(app);
const rooms = collection(firestore, 'rooms');

export async function createDocument(data: any) {
	return await addDoc(rooms, data);
}

export function getDocument(id: string) {
	return doc(rooms, id);
}

export async function getData(
	doc: DocumentReference<DocumentData, DocumentData>
): Promise<DocumentData> {
	const d = await getDoc(doc);
	const data = d.data();
	if (!data) throw new Error('Document data is undefined.');
	return data;
}
