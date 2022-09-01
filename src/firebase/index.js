import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
  limit,
  addDoc,
  collection,
  startAfter,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGpqoH7gFVmBixWAgd73sFUDKpQKXFKFQ",
  authDomain: "rkcc-9b2cc.firebaseapp.com",
  projectId: "rkcc-9b2cc",
  storageBucket: "rkcc-9b2cc.appspot.com",
  messagingSenderId: "266930754954",
  appId: "1:266930754954:web:b9b6e24022d3deccbaa473",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "comments");
let documentSnapshots = [];

export async function getLatestComments({count}) {
  const q = query(colRef, orderBy("createdAt", "desc"), limit(count));
  const snapshot = await getDocs(q);
  return snapshot;
}

export async function getMoreComments({count, lastComment}) {
  // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  const q = query(
    colRef,
    orderBy("createdAt", "desc"),
    startAfter(lastComment),
    limit(count)
  );
  const snapshot = await getDocs(q);
  // documentSnapshots = {...documentSnapshots, ...snapshot}
  // const comments = [];
  // await snapshot.docs.forEach((doc) => {
  //   comments.push({ ...doc.data() });
  // });
  return snapshot;
}

export function sendMessage(name, contact, message) {
  addDoc(colRef, {
    name,
    contact,
    message,
    createdAt: serverTimestamp(),
  });
}

export default app;
