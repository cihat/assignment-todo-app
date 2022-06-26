import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage";

const todoLocalStorage = loadLocalStorage("todos");

const store = createStore(rootReducer, todoLocalStorage);

store.subscribe(() => {
  saveLocalStorage("todos", store.getState().todos);
});

export default store;
