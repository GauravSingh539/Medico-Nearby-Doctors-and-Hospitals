import React from "react";
//  import ReactDOM from "react-dom";
    import { StrictMode } from "react";
    import {createRoot}  from "react-dom/client";
//  import { BrowserRouter } from "react-router-dom";
//  import { Routes, Route } from 'react-router-dom';
//  import Login from "./components/Login";
//  import SignUp from "./components/SignUp";
 import App from "./components/App"

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
                <App />
            </StrictMode>);