import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { PortfolioApp } from "./PortfolioApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PortfolioApp />
    </QueryClientProvider>
  </StrictMode>
);
