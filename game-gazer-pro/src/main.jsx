import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}/>
          <Route path="game/:id" element={<DetailView/>}/>
          <Route path="*" element={
            <main className="whole-page">
              <h1>404 - Page Not Found</h1>
              <p>How did you get here? This page doesn't exist. Go home.</p>
              <Link>
              Teleport Home
              </Link>
            </main>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
