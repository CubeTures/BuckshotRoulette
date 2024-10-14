import { get } from 'svelte/store';
import { createDocument, getData, getDocument } from './firestore';
import { connection } from './store';
import {
	addDoc,
	collection,
	onSnapshot,
	updateDoc,
	type DocumentData,
	type DocumentReference
} from 'firebase/firestore';

// called when wanting to create a room
export async function createOffer() {
	const offer = await getOffer();
	const doc = await createDocument({ offer });

	listenIceCandidates(doc);
	listenOffers(doc);
	listenAcceptOffer(doc);

	return doc;
}

async function getOffer() {
	const pc = get(connection);
	const offerDescription = await pc.createOffer();
	await pc.setLocalDescription(offerDescription);

	return {
		sdp: offerDescription.sdp,
		type: offerDescription.type
	};
}

// updating personal candidates
function listenIceCandidates(doc: DocumentReference<any, DocumentData>) {
	const offerCandidates = collection(doc, 'offerCandidates');

	const pc = get(connection);
	pc.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
		event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
	};
}

// I'm not sure
function listenOffers(doc: DocumentReference<any, DocumentData>) {
	const pc = get(connection);
	onSnapshot(doc, (snapshot) => {
		const data = snapshot.data();
		if (!pc.currentRemoteDescription && data?.answer) {
			const answerDescription = new RTCSessionDescription(data.answer);
			pc.setRemoteDescription(answerDescription);
		}
	});
}

// fires when call accepted
function listenAcceptOffer(doc: DocumentReference<any, DocumentData>) {
	const answerCandidates = collection(doc, 'answerCandidates');

	const pc = get(connection);
	onSnapshot(answerCandidates, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				const candidate = new RTCIceCandidate(change.doc.data());
				pc.addIceCandidate(candidate);
			}
		});
	});
}

// called when wanting to join an existing room
export async function acceptOffer(id: string) {
	const doc = getDocument(id);
	const offerCandidates = collection(doc, 'offerCandidates');
	const answerCandidates = collection(doc, 'answerCandidates');

	const pc = get(connection);
	pc.onicecandidate = (event) => {
		event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
	};

	const roomData = await getData(doc);

	console.log(roomData);
	const offerDescription = roomData.offer;
	await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

	const answerDescription = await pc.createAnswer();
	await pc.setLocalDescription(answerDescription);

	const answer = {
		sdp: answerDescription.sdp,
		type: answerDescription.type
	};

	await updateDoc(doc, { answer });

	onSnapshot(offerCandidates, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				const data = change.doc.data();
				pc.addIceCandidate(new RTCIceCandidate(data));
			}
		});
	});
}
