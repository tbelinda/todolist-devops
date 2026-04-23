import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles/theme";
import Dashboard from "./MainView/5-panels/Dashboard";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );

import logo from "./logo.svg";
import "./App.css";

function App() {
    console.log("");

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
    export default App;
}
