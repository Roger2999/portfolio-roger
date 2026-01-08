import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { PortfolioApp } from "./PortfolioApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </StrictMode>
);
