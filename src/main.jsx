import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { LevelProvider } from "./store/ContexApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LevelProvider> */}
      <App />
    {/* </LevelProvider> */}
  </React.StrictMode>
);
