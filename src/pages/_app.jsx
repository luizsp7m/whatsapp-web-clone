import { ThemeProvider } from 'styled-components'

import { AppProvider } from '../contexts/AppContext'

import { GlobalStyle } from '../styles/GlobalStyle'

const theme = {
  colors: {
    sidebar: "#131C21",
    sidebarHeader: "#2a2f32",
    sidebarGroup: "rgba(255, 255, 255, .1)",
    textPrimary: "#b1b3b5",
    textSecondary: "#e2e2d9",
    backgroundPrimary: "#262D31",
  },
}

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}
