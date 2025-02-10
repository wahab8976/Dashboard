import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <StrictMode>
      <App className="dark text-foreground bg-background" />
    </StrictMode>
  </HeroUIProvider>
);
