import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home/Home'
import Product from './views/productdetails/Product'
function App() {
  return (
    <Routes>

      <Route
        path="/" element={<Home />}
      />
      <Route
        path="/productdetail" element={<Product />}
      />
    </Routes>
  )
}

export default App
