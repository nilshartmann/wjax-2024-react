import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./standalone/compiler/CompilerApp.tsx";
import App from "./standalone/context/ContextApp.tsx";
// import App from "./RouterApp.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
