import React from 'react'
// import ReactDOM from 'react-dom'

import {createRoot} from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// PAGES 
import Home from './pages/Home'
import About from './pages/About'
import LodgingPage from './pages/LodgingPage'

// COMPONENTS
import Header from './components/Header'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logement/:id" element={<LodgingPage />}/>
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="*" element={<Navigate to="/notfound" replace />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)