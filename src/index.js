import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { HashRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <HashRouter basename="/Quotes">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
