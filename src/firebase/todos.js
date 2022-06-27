import { db } from "./";
import {
  collection,
  updateDoc,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { signOut, getAuth, onAuthStateChanged, auth } from "firebase/auth";
import { googleProvider, app } from "./";
import { getDatabase, ref, child, push, update, set } from "firebase/database";
import { storage } from "./";

const saveTodosInFirebase = async (todos) => {
  const user = getAuth(app).currentUser;
  console.log("test", user.uid);
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const userDoc = await getDocs(q);
  const userData = userDoc.docs[0].data();

  if (todos) {
    setDoc(doc(db, "users", userData.uid), { todos }, { merge: true }).then(
      () => console.log("Document updated")
    );
  }

  console.log("userData", userData.uid);

  return userData;
};

export { saveTodosInFirebase };
