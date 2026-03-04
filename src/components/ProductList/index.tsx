import { FilterOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, Segmented, Select } from 'antd'
import type { Product } from '../../types/product'
import ProductCard from '../ProductCard'

interface ProductListProps {
  products: Product[]
  onAddProduct: () => void
}

function ProductList({ products, onAddProduct }: ProductListProps) {
  return (
    <div className="product-list-page">
      <div className="header-row">
        <h1>Product List</h1>
        <Select
          defaultValue="All Categories"
          options={[{ label: 'All Categories', value: 'All Categories' }]}
        />
      </div>

      <Segmented
        className="list-status-tabs"
        options={[
          { label: 'All 47', value: 'all' },
          { label: 'Active 14', value: 'active' },
          { label: 'Inactive 2', value: 'inactive' },
        ]}
        defaultValue="all"
      />

      <div className="list-shell">
        <div className="toolbar-row">
          <div className="left-actions">
            <Input size="large" placeholder="Search Product" />
            <Button size="large" icon={<FilterOutlined />} />
            <Button size="large">Bulk Action</Button>
          </div>
          <div className="right-actions">
            <Button size="large">Sort</Button>
            <Button size="large">Support</Button>
            <Button size="large" type="primary" icon={<PlusOutlined />} onClick={onAddProduct}>
              Add Product
            </Button>
          </div>
        </div>

        <div className="rows-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="pagination-row">
          <div className="pager">1 2 3 4 5 ... 50</div>
          <div className="products-count">Total 85 Products</div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
