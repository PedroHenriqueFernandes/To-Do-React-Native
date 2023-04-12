import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import { defaultTheme } from "./src/styles/themes/default";

import * as Font from 'expo-font';
import { Inter } from './assets/fonts/expo-asset';

import React, { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({ 'Inter': Inter });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme} >
      <Home />
    </ThemeProvider>
  );
}