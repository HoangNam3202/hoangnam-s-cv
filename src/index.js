import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import Test from "./components/Test";
import MoneyBorrow from "./components/MoneyBorrow";
import Profile from "./components/Profile";
import allReducers from "./store/reducers/index";

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Profile />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
