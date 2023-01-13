import "./index.css";
import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/homePage.js";
import TodoList from "./pages/listPage.js";

function App() {
    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/list" element={ <TodoList /> } />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);