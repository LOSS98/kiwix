import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/layout.css'
import './styles/pages.css'
import './styles/dashboard.css'
import './styles/footer.css'
import './styles/components/button.css'
import './styles/components/card.css'
import './styles/components/input.css'
import './styles/components/modal.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)