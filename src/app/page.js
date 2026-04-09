"use client"

import React, { useMemo } from "react";
// 1. Correct Import Source
import { ThemeProvider, createTheme } from "@mui/material/styles"; 
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from "@mui/material";
import Header from "./component/Header";
import Body from "./component/Body";

export default function App() {
  // 2. Fixed variable naming consistency
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          // Use the lowercase variable here
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Body/>
    </ThemeProvider>
  );
}