import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../types/product'
import { productData } from '../mock/productData'

interface ProductState {
  products: Product[]
  search: string
  filter: 'All' | 'Active' | 'Inactive'
  isAddModalOpen: boolean
}

const initialState: ProductState = {
  products: productData,
  search: '',
  filter: 'All',
  isAddModalOpen: false,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
