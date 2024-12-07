import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// selectioner l'element avec l'id=root dans le fishier index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
//afisher l'app React dans l'element du DOM "root"
root.render(
  // BrowserRouter permets la navigation entre les pages
  // React.StrictMode pour identifier les problemes de performance
  // et pour offrir des alerts pendant le developement
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
