import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.js";

const container = document.getElementById("mydiv");
const root = createRoot(container);
root.render(<App />);