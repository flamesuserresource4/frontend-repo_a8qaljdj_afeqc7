import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ForBusiness from './pages/ForBusiness'
import ForProfessionals from './pages/ForProfessionals'
import Solutions from './pages/Solutions'
import Features from './pages/Features'
import PricingPage from './pages/PricingPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-professionals" element={<ForProfessionals />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
