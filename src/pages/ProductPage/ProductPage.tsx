import { Layout } from 'antd'
import { useMemo, useState } from 'react'
import AddProductModal from '../../components/AddProductModal'
import ProductList from '../../components/ProductList'
import Sidebar from '../../components/Sidebar'
import SuccessModal from '../../components/SuccessModal'
import { productData } from '../../mock/productData'
import './ProductPage.css'

const { Content } = Layout

function ProductPage() {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const products = useMemo(() => productData, [])

  const handleCreateProduct = () => {
    setShowAddProduct(false)
    setShowSuccess(true)
  }

  return (
    <>
      <ProductList products={products} onAddProduct={() => setShowAddProduct(true)} />
      <AddProductModal
        open={showAddProduct}
        onCancel={() => setShowAddProduct(false)}
        onSubmit={handleCreateProduct}
      />
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  )
}

export default ProductPage
