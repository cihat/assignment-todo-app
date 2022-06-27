import { db } from "./";
import {
  collection,
  updateDoc,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { signOut, getAuth, onAuthStateChanged, auth } from "firebase/auth";
import { googleProvider, app } from "./";
import { getDatabase, ref, child, push, update, set } from "firebase/database";

const saveTodosInFirebase = async (todos) => {
  const user = getAuth(app).currentUser;
  const userId = user.uid;
  writeTodo(userId, todos);
};

function writeTodo(userId, todos) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    todos,
  });
}

export { saveTodosInFirebase };
