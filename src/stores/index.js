import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage";
import { saveTodosInFirebase } from "../firebase/todos";

const store = createStore(rootReducer, loadLocalStorage("todos"));

store.subscribe(async () => {
  saveLocalStorage("todos", store.getState().todos);
  await saveTodosInFirebase(store.getState().todos);
});

export default store;
