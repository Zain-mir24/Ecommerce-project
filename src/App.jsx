import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home/Home'
import Product from './views/productdetails/Product'
import Cart from "./views/cart/cart"
function App() {
  return (
    <Routes>

      <Route
        path="/" element={<Home />}
      />
      <Route
        path="/productdetail" element={<Product />}
      />
      <Route
        path="/Cart" element={<Cart />}
      />
    </Routes>
  )
}

export default App
