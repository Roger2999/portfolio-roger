import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/themes.css";
import { PortfolioApp } from "./PortfolioApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>
);
