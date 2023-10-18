import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import App from "./App"
import { StateProvider } from "./StateProvider";
import reducer , { initialState } from "./reducer";
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StateProvider reducer={reducer} initialState={initialState}>
    <App />
    </StateProvider>
)
