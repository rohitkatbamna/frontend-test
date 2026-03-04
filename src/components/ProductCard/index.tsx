import { Checkbox, Tag, Image, Typography } from 'antd'
import type { Product } from '../../types/product'
import imageGiven from '../../assets/gift.png'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: Readonly<ProductCardProps>) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #E0E0E0',
      }}
    >
      <Checkbox />
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Image
          src={imageGiven}
          alt={product.name}
          width={80}
          height={46}
          style={{
            borderRadius: '8px',
          }}
        />
        <div>
          <Typography.Title
            level={5}
            style={{
              margin: '0',
            }}
          >
            {product.name}
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{ color: '#389E0D', fontWeight: 'semibold', margin: '0' }}
          >
            ${product.price}
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
