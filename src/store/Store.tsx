import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
// const rootReducer =combineReducers({
// })
export const store=configureStore({
    reducer:{
        cart:cartReducer
    } 
})
export type RootState = ReturnType<typeof store.getState>