import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../types/product'
import { productData } from '../mock/productData'

interface ProductState {
  products: Product[]
  search: string
  filter: 'All' | 'Active' | 'Inactive'
  isAddModalOpen: boolean
  filteredProducts: Product[]
}

const initialState: ProductState = {
  products: productData,
  search: '',
  filter: 'All',
  isAddModalOpen: false,
  filteredProducts: productData,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const { id, ...rest } = action.payload
      state.products = state.products.map((p) => (p.id === id ? { ...p, ...rest } : p))
    },
    // filter products by input search and filter intial state
    filterProductsBySearch: (state, action: PayloadAction<string>) => {
      const initialState = [ ...state.products ]
      state.filteredProducts = initialState.filter((p) => p.name.toLowerCase().includes(action.payload.toLowerCase()))
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addProduct, deleteProduct,updateProduct ,filterProductsBySearch} = productSlice.actions

export default productSlice.reducer
