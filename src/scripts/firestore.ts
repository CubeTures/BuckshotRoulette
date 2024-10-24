import {
	addDoc,
	collection,
	doc,
	DocumentReference,
	getDoc,
	getFirestore,
	updateDoc,
	type DocumentData
} from 'firebase/firestore';
import app from './firebase';

const firestore = getFirestore(app);
const rooms = collection(firestore, 'rooms');

export async function createDocument(data: any) {
	return await addDoc(rooms, data);
}

export async function updateDocument(
	id: string,
	data: any
): Promise<DocumentReference<DocumentData, DocumentData>> {
	const document = doc(rooms, id);
	await updateDoc(document, data);
	return document;
}

export async function updateDocumentData(
	doc: DocumentReference<DocumentData, DocumentData>,
	data: any
) {
	await updateDoc(doc, data);
}

export function getDocument(id: string) {
	return doc(rooms, id);
}

export async function getDocumentData(
	doc: DocumentReference<DocumentData, DocumentData>
): Promise<DocumentData> {
	const d = await getDoc(doc);
	const data = d.data();
	if (!data) throw new Error('Document data is undefined.');
	return data;
}
