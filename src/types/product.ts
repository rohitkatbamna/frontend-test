export type ProductStatus = 'Active' | 'Inactive'

export interface Product {
  image: unknown
  id: string
  name: string
  price: number
  status: ProductStatus
  category: string
}
