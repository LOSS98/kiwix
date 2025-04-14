import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/variables.css'
import './styles/global.css'
import './styles/layout.css'
import './styles/dashboard.css'
import './styles/junior.css'
import './styles/footer.css'
import './styles/login.css'
import './styles/components/button.css'
import './styles/components/card.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)