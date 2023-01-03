import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore } from 'redux-persist'
const persistConfig={
    key:'root',
    storage
}
const rootReducer =combineReducers({
    cart:cartReducer
})
const  persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer
})
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)