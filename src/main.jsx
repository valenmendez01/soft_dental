import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import ContextWrapper from "./components/Agenda/Calendars/PRUEBA/context/ContextWrapper.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ContextWrapper>
  </React.StrictMode>,
)
