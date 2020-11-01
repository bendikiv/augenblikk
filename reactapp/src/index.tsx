import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemedApp } from "./theme";
import * as serviceWorker from "./serviceWorker";
import { UserProvider } from "./login/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ThemedApp />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
