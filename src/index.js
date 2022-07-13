import React from "react";
import "./index.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "./app/store";

import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const container = document.getElementById("root");
const root = createRoot(container);
const history = createBrowserHistory();

root.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
