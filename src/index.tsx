import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this line is present
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
