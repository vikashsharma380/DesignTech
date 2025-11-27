import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import jcbCursor from "./assets/jcb.png";

// Inject cursor dynamically
document.body.style.cursor = `url(${jcbCursor}) 5 5, auto`;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
