import React from 'react'
import { cartItems, Totalquantity } from '../../store/slices/cartSlice'
import { useSelector } from 'react-redux'
function Cart() {
  const cart=useSelector(cartItems)
  const amount=useSelector(Totalquantity)
  return (
    <div>
      Cart{amount}
      </div>
  )
}

export default Cart