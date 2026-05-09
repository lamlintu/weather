import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import "./styles/flex-grid.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
