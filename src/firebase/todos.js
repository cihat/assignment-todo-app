import { db } from "./";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "./";

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
