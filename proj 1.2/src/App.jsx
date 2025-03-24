import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import ProductPage from './pages/ProductPage'
import Dashboard from './Dashboard'
import Home from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
