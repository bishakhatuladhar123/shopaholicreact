import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./assets/css/global.css"
import RouterConfig from './config/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig/>
  </StrictMode>,
)
