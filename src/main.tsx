import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/app/App'
import '@/app/styles/globals.scss'

import "../18n"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)