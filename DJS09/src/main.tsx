// Importing 'StrictMode' from React 
import { StrictMode } from 'react'
// Importing the 'createRoot' method from React DOM to render the app
import { createRoot } from 'react-dom/client'
// Importing the CSS file to apply styles globally
import './index.css'
// Importing the App component
import App from './App.tsx'

// Creating a root for the React application and rendering the 'App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
