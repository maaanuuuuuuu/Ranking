import { LanguageProvider } from 'contexts/LanguageContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Router from 'routes/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={Router} />
    </LanguageProvider>
  </React.StrictMode>,
)
