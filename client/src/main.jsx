import React from 'react';
import {RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {router} from './routes/Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </StrictMode>,
)