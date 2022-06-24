import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./stores/reducers";
import { loadLocalStorage, saveLocalStorage } from "./utils/localStorage";

const savedState = loadLocalStorage("todos");

const store = createStore(rootReducer, savedState);

store.subscribe(() => {
  saveLocalStorage("todos", store.getState().todos);
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
