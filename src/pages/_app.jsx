import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '../contexts/AuthContext';
import { AppProvider } from '../contexts/AppContext';

import { GlobalStyle } from '../styles/GlobalStyle';

import { dark, light } from '../styles/Themes';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    if(theme === dark) {
      setTheme(light);
      localStorage.setItem("WhatsappClone:theme", "light");
    } else {
      setTheme(dark);
      localStorage.setItem("WhatsappClone:theme", "dark");
    }
  }

  useEffect(() => {
    const themeStorage = localStorage.getItem('WhatsappClone:theme');
    themeStorage === 'dark' ? setTheme(dark) : setTheme(light);
  }, []);

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{
        toggleTheme, theme
      }}>
        <AppProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AppProvider>
      </ThemeContext.Provider>
    </AuthProvider>
  )
}
