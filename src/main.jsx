import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoginContextProvider } from './Context/LoginContext'
import { LogoutContextProvider } from './Context/LogoutContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <LogoutContextProvider>
        <App />
      </LogoutContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
)
