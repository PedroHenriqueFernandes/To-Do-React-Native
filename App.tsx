import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import { defaultTheme } from "./src/styles/themes/default";

import * as Font from 'expo-font';
import { fonts } from './assets/fonts/expo-asset';

import React, { useEffect } from 'react';

async function loadFonts() {
  await Font.loadAsync(fonts);
}

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme} >
      <Home />
    </ThemeProvider>
  );
}