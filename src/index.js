import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter basename="/Quotes">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
