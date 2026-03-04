import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Card, Modal } from 'antd'
import type { Item } from '../../../types/item'

interface ItemDetailsModalProps {
  open: boolean
  item: Item | null
  onClose: () => void
  onSend: () => void
}

function ItemDetailsModal({ open, item, onClose, onSend }: Readonly<ItemDetailsModalProps>) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1080}
      className="send-modal"
      closeIcon={<CloseOutlined />}
      destroyOnHidden
    >
      <div className="modal-title">Item Details</div>
      <p className="modal-subtitle">
        Review product information, pricing, and specifications and other details below.
      </p>

      <div className="details-grid">
        <div>
          <div className="shoe-large" />
          <div className="thumb-row">
            <div className="shoe-thumb" />
            <div className="shoe-thumb" />
            <div className="shoe-thumb" />
          </div>
          <Card className="vendor-box">
            <div className="item-vendor-label">Vendor Name</div>
            <div className="item-vendor">AKA Vendor</div>
          </Card>
        </div>

        <div>
          <h2 className="details-item-name">{item?.name ?? 'Item Name'}</h2>
          <div className="item-price">${item?.price ?? 23}</div>
          <h4>Description</h4>
          <p className="description-text">
            Unleash urban energy with every step. These PUMA kicks fuse street-smart style with
            athletic performance, built for those who don&apos;t just walk, but move with purpose.
          </p>

          <Card className="options-card">
            <h3>Product Options Available</h3>
            <div className="option-title">Select Colors</div>
            <div className="option-row">
              <Button>Green</Button>
              <Button>Yellow</Button>
              <Button className="is-selected">Red</Button>
            </div>
            <div className="option-title">Select Size</div>
            <div className="option-row">
              <Button>US-7</Button>
              <Button className="is-selected">US-8</Button>
              <Button>US-9</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="modal-footer">
        <Button size="large" icon={<ArrowLeftOutlined />} onClick={onClose}>
          Back
        </Button>
        <Button size="large" type="primary" onClick={onSend}>
          Send Item
        </Button>
      </div>
    </Modal>
  )
}

export default ItemDetailsModal
