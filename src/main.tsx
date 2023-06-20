import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import InformationModalProvider from "./contexts/informationModalProvider.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <InformationModalProvider>
        <App />
      </InformationModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
