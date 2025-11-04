import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/i18n";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/index";
import { ModalContextProvider } from "./context/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalContextProvider>
    </ThemeProvider>
  </StrictMode>
);
