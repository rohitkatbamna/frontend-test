import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Button, Checkbox, Divider, Dropdown, Form, Image, Modal, Typography } from 'antd'
import type { MenuProps } from 'antd'
import type { Product } from '../../../../types/product'
import imageGiven from '../../../../assets/gift.png'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { deleteProduct, updateProduct } from '../../../../store/productSlice'
import './ProductCard.css'
import { useState } from 'react'
import { MainAddEditForm } from '../AddProductModal'

interface ProductCardProps {
  product: Product
}

const STATUS_COLORS = {
  Active: { border: '#B7EB8F', background: '#F6FFED', color: '#52C41A' },
  Inactive: { border: '#D9D9D9', color: '#8C8C8C' },
}

function ProductCard({ product }: Readonly<any>) {
  const dispatch = useAppDispatch()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const menuItems: MenuProps['items'] = [
    {
      key: 'update',
      label: 'Update',
      icon: <EditOutlined />,
      onClick: () => setIsUpdateModalOpen(true),
    },
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
      <div className="product-card__divider-container">
        <Divider type="vertical" className="product-card__divider" />
        <div className="product-card__id-block">
          <Typography.Text type="secondary" className="product-card__id-label">
            Product ID
          </Typography.Text>
          <Typography.Text strong>{product.id}</Typography.Text>
        </div>
      </div>
      <div className="product-card__actions">
        <div
          className="product-card__status"
          style={{ border: `1px solid ${statusColor.border}`, color: statusColor.color }}
        >
          {product.status}
        </div>
        <Button size="small">
          <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
            <EllipsisOutlined className="product-card__menu-icon" rotate={90} />
          </Dropdown>
        </Button>
      </div>
      <UpdateProductModal
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
        product={product}
      />
    </div>
  )
}

function UpdateProductModal({ isOpen, setIsOpen, product }: any) {
  const [form] = Form.useForm<any>()
  const dispatch = useAppDispatch()
  const handleFinish = (values: any) => {
    dispatch(updateProduct({ id: product.id, ...values }))
    setIsOpen(false)
  }
  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
      width={1200}
      centered
      className="update-product-modal"
      destroyOnHidden
    >
      <MainAddEditForm
        form={form}
        handleFinish={handleFinish}
        isEdit={true}
        initialValues={product}
        onCancel={() => setIsOpen(false)}
      />
    </Modal>
  )
}

export default ProductCard
