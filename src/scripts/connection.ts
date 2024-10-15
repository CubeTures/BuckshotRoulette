import { get } from 'svelte/store';
import { createDocument, getDocumentData, getDocument } from './firestore';
import { connection, host } from './store';
import {
	addDoc,
	collection,
	CollectionReference,
	onSnapshot,
	setDoc,
	updateDoc,
	type DocumentData,
	type DocumentReference
} from 'firebase/firestore';
import type { Description } from '../interfaces/rtcInterfaces';

// create a room
export async function createOffer(id?: string) {
	host.set(true);

	const pc = get(connection);
	const offer = await getOfferDescription(pc);
	const doc = await getOfferDoc(offer, id);

	const offerCandidates = collection(doc, 'offerCandidates');
	const answerCandidates = collection(doc, 'answerCandidates');

	updateLocalCandidates(pc, offerCandidates);
	listenForAnswer(pc, doc);
	updateRemoteCandidates(pc, answerCandidates);

	return doc;
}

async function getOfferDescription(pc: RTCPeerConnection): Promise<Description> {
	const offerDescription = await pc.createOffer();
	await pc.setLocalDescription(offerDescription);

	return {
		sdp: offerDescription.sdp,
		type: offerDescription.type
	};
}

async function getOfferDoc(offer: Description, id?: string) {
	if (id) {
		const doc = getDocument(id);
		await setDoc(doc, { offer });
		return doc;
	}
	return await createDocument({ offer });
}

function listenForAnswer(pc: RTCPeerConnection, doc: DocumentReference<any, DocumentData>): void {
	onSnapshot(doc, (snapshot) => {
		const data = snapshot.data();
		if (!pc.currentRemoteDescription && data?.answer) {
			setRemoteDescription(pc, data.answer);
		}
	});
}

// join an existing room
export async function acceptOffer(id: string): Promise<void> {
	host.set(false);

	const pc = get(connection);
	const doc = getDocument(id);

	const offerCandidates = collection(doc, 'offerCandidates');
	const answerCandidates = collection(doc, 'answerCandidates');

	const offerExists = await readRoomOffer(pc, doc);
	if (offerExists) {
		updateLocalCandidates(pc, answerCandidates);
		writeAnswer(pc, doc);
		updateRemoteCandidates(pc, offerCandidates);
	} else {
		throw new Error('Offer does not exists in the room.');
	}
}

async function readRoomOffer(
	pc: RTCPeerConnection,
	doc: DocumentReference<any, DocumentData>
): Promise<boolean> {
	const roomData = await getDocumentData(doc);

	if (roomData.offer) {
		setRemoteDescription(pc, roomData.offer);
		return true;
	}

	return false;
}

async function writeAnswer(
	pc: RTCPeerConnection,
	doc: DocumentReference<DocumentData, DocumentData>
): Promise<void> {
	const answer = await getAnswerDescription(pc);
	await updateDoc(doc, { answer });
}

async function getAnswerDescription(pc: RTCPeerConnection): Promise<Description> {
	const answerDescription = await pc.createAnswer();
	await pc.setLocalDescription(answerDescription);

	return {
		sdp: answerDescription.sdp,
		type: answerDescription.type
	};
}

function updateLocalCandidates(
	pc: RTCPeerConnection,
	candidates: CollectionReference<DocumentData, DocumentData>
): void {
	pc.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
		event.candidate && addDoc(candidates, event.candidate.toJSON());
	};
}

function setRemoteDescription(pc: RTCPeerConnection, data: Description) {
	const description = new RTCSessionDescription(data);
	console.log(`Connected ${data.type}`);
	pc.setRemoteDescription(description);
}

function updateRemoteCandidates(
	pc: RTCPeerConnection,
	candidates: CollectionReference<DocumentData, DocumentData>
) {
	onSnapshot(candidates, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				const data = change.doc.data();
				if (data) {
					const candidate = new RTCIceCandidate(data);
					pc.addIceCandidate(candidate);
				}
			}
		});
	});
}
