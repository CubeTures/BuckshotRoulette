import { get } from 'svelte/store';
import { createDocument, getDocumentData, getDocument, updateDocumentData } from './firestore';
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
import { createChannel, setChannel } from './channel';

// create a room
export async function createOffer(id?: string) {
	host.set(true);

	const pc = get(connection);
	createChannel(pc);

	const doc = await createOfferDoc();
	const offerCandidates = collection(doc, 'offerCandidates');
	const answerCandidates = collection(doc, 'answerCandidates');

	updateLocalCandidates(pc, offerCandidates);

	const offer = await getOfferDescription(pc);
	updateDocumentData(doc, { offer });

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

async function createOfferDoc() {
	return await createDocument({});
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
	console.log(pc);
	createChannel(pc);
	// pc.addEventListener('datachannel', setChannel);
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
			if (pc.remoteDescription) {
				console.log(`Change: ${change}`);
				if (change.type === 'added') {
					const data = change.doc.data();
					const candidate = new RTCIceCandidate(data);
					pc.addIceCandidate(candidate);
					console.log(`Added Remote ICE Candidate: ${candidate}`);
				}
			}
		});
	});
}
