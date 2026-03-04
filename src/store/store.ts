import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import itemReducer from './itemSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    items: itemReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
