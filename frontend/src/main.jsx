import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import StoreContextProvider from "./contest/StoreContext.jsx";
import "./index.css";

const root_element = document.getElementById("root");

createRoot(root_element).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
