import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Details/>
    </ThemeProvider>
  </React.StrictMode>,
)