import { Checkbox, Tag } from 'antd'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-row-card">
      <div className="product-col-main">
        <Checkbox />
        <div className="product-thumb" />
        <div>
          <div className="product-title">{product.name}</div>
          <div className="product-price">$ {product.price}</div>
        </div>
      </div>

      <div className="product-col-id">
        <div className="subtle-label">Product ID</div>
        <div className="product-id">{product.id}</div>
      </div>

      <Tag className="status-tag" color="green">
        {product.status}
      </Tag>

      <button type="button" className="row-menu-btn" aria-label="Open row menu">
        ...
      </button>
    </div>
  )
}

export default ProductCard
