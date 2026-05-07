import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/styles/theme";
import Dashboard from "./MainView/5-panels/Dashboard";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;