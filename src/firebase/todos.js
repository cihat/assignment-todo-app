import { db } from "./";
import { collection, updateDoc, addDoc } from "firebase/firestore";

const updateTodosInUser = async (uid, todos) => {
  const userDoc = collection(db, "users").doc(uid);
  await updateDoc(userDoc, { todos });
};

const loadTodosFromUser = async (uid) => {
  const userDoc = collection(db, "users").doc(uid);
  const user = await userDoc.get();
  return user.data().todos;
};

export { updateTodosInUser, loadTodosFromUser };
