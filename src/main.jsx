import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LogoutContextProvider } from './Context/LogoutContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogoutContextProvider>
      <App />
    </LogoutContextProvider>
  </React.StrictMode>,
)
