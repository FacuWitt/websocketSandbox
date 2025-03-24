import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import GreetingsApp from "./pages/GreetingsApp.jsx";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className={"bg-dark vh-100"}>
      <App/>
    </div>
  </StrictMode>,
)
