import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
const rootReducer =combineReducers({
    cart:cartReducer
})
export const store=configureStore({
    reducer:rootReducer
})
export type RootState = ReturnType<typeof store.getState>