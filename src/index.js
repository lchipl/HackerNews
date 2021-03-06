import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "./redux/reducer/reducer";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "./redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();
// prettier-ignore

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(saga,)));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
