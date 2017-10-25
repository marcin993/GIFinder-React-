import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import { Map } from "immutable";

//Middlewares
import saveToLS from "./middlewares/saveToLS.js";
import setDefaultSettings from "./middlewares/setDefaultSettings.js";
import clearSearchHistory from "./middlewares/clearSearchHistory.js";
import addQueryToHistory from "./middlewares/addQueryToHistory.js";
import deleteTag from "./middlewares/deleteTag.js";
import sendQuery from "./middlewares/sendQuery.js";

//Reducers
import appReducer from "./reducers/appReducer.js";
import settingsReducer from "./reducers/settingsReducer.js";
import UIReducer from "./reducers/UIReducer.js";

const reducers = combineReducers({
  appReducer,
  settingsReducer,
  UIReducer
})


const store = createStore(reducers, Map({}),
applyMiddleware(
  saveToLS,
  setDefaultSettings,
  clearSearchHistory,
  addQueryToHistory,
  deleteTag,
  sendQuery)
);

import AppContainer from "./containers/AppContainer.js";

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>
, document.getElementById("app"));
