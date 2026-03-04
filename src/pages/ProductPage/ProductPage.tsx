import { useState } from 'react'
import AddProductModal from './components/AddProductModal'
import ProductList from './components/ProductList'
import SuccessModal from './components/SuccessModal'
import './ProductPage.css'

function ProductPage() {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCreateProduct = () => {
    setShowAddProduct(false)
    setShowSuccess(true)
  }

  return (
    <div>
      <ProductList onAddProduct={() => setShowAddProduct(true)} />
      <AddProductModal
        open={showAddProduct}
        onCancel={() => setShowAddProduct(false)}
        onSubmit={handleCreateProduct}
      />
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  )
}

export default ProductPage
