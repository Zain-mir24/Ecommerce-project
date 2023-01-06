import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './views/Home/Home'
import Product from './views/productdetails/Product'
import Cart from "./views/cart/cart"
import { Payment } from './views/paymentPage/Payment'
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
      <Route
        path="/Payment" element={<Payment />}
      />
    </Routes>
  )
}

export default App
