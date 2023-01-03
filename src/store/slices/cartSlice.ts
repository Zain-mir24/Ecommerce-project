import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

interface Cart {
    cartItems: Array<{
        name: String,
        productCode: String,
        price: number,
        sideImage: [],
        img: String,
        quantity: number
    }>,
    totalQuantity: number,
    totalAmount: number
}
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
} as Cart

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        // for adding data to cart
        addtoCart(state, action) {
            const productIndex = state.cartItems.findIndex(
                (item) => item.productCode === action.payload.productCode
            )
            if (productIndex >= 0) {
                state.cartItems[productIndex].quantity += 1;
                state.totalQuantity += 1;
                state.totalAmount += action.payload.price
            }
            else {
                // action payload is the product coming from frontend
                const tempProduct = { ...action.payload, quantity: 1 };
                state.totalQuantity += 1;
                state.totalAmount += action.payload.price;
                state.cartItems.push(tempProduct);

            }
        },
        // Removing items from cart
        removeFromCart(state, action) {
            const productIndex = state.cartItems.findIndex(
                (item) => item.productCode === action.payload.productCode
            )
            const amountDeduct = action.payload.quantity * action.payload.price;
            console.log(amountDeduct, "Deducted")
            state.totalQuantity -= action.payload.quantity;
            state.totalAmount -= amountDeduct;
            state.cartItems.splice(productIndex, 1);
        }
    }
})
export const cartItems = (state: RootState) => state.cart.cartItems
export const Totalquantity = (state: RootState) => state.cart.totalQuantity
export const TotalAmount = (state: RootState) => state.cart.totalAmount
export const { addtoCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;