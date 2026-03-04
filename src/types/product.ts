export type ProductStatus = 'Active' | 'Inactive'

export interface Product {
  id: string
  name: string
  price: number
  status: ProductStatus
  category: string
}
