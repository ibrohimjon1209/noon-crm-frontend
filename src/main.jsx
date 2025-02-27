import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LevelProvider } from "./store/ContexApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LevelProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </LevelProvider>
);
