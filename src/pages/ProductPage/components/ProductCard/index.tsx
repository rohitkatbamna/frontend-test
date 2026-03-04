import { DeleteOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Checkbox, Divider, Dropdown, Image, Typography } from 'antd'
import type { MenuProps } from 'antd'
import type { Product } from '../../../../types/product'
import imageGiven from '../../../../assets/gift.png'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { deleteProduct } from '../../../../store/productSlice'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

const STATUS_COLORS = {
  Active: { border: '#389E0D', color: '#389E0D' },
  Inactive: { border: '#D9D9D9', color: '#8C8C8C' },
}

function ProductCard({ product }: Readonly<ProductCardProps>) {
  const dispatch = useAppDispatch()

  const menuItems: MenuProps['items'] = [
    {
      key: 'delete',
      label: 'Delete',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => dispatch(deleteProduct(product.id)),
    },
  ]

  const statusColor = STATUS_COLORS[product.status] ?? STATUS_COLORS.Inactive

  return (
    <div className="product-card">
      <Checkbox className="product-card__checkbox" />
      <div className="product-card__info">
        <Image
          src={imageGiven}
          alt={product.name}
          width={80}
          height={46}
          className="product-card__image"
          preview={false}
        />
        <div>
          <Typography.Title level={5} style={{ margin: 0 }}>
            {product.name}
          </Typography.Title>
          <Typography.Text className="product-card__price">${product.price}</Typography.Text>
        </div>
      </div>
      <Divider type="vertical" className="product-card__divider" />
      <div className="product-card__id-block">
        <Typography.Text type="secondary" className="product-card__id-label">
          Product ID
        </Typography.Text>
        <Typography.Text strong>{product.id}</Typography.Text>
      </div>
      <Divider type="vertical" className="product-card__divider" />
      <div className="product-card__actions">
        <div
          className="product-card__status"
          style={{ border: `1px solid ${statusColor.border}`, color: statusColor.color }}
        >
          {product.status}
        </div>

        <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
          <EllipsisOutlined className="product-card__menu-icon" />
        </Dropdown>
      </div>
    </div>
  )
}

export default ProductCard
