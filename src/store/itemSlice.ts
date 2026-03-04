import { createSlice } from '@reduxjs/toolkit'
import type { Item } from '../types/item'
import { itemData } from '../mock/itemData'

interface ItemState {
  items: Item[]
}

const initialState: ItemState = {
  items: itemData,
}

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
})

export default itemSlice.reducer
