import React from "react";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./routes/Route";
import StoreContextProvider from "./contexts/StoreContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StoreContextProvider>
  </StrictMode>
);
