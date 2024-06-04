import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ImagesProvider } from "./ImagesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode basename="/test-images/">
    <ImagesProvider>
      <App />
    </ImagesProvider>
  </React.StrictMode>
);
