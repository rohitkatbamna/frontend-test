import { ArrowLeftOutlined, CloseOutlined, ShopOutlined } from '@ant-design/icons'
import { Button, Card, Modal } from 'antd'
import type { Item } from '../../../types/item'

interface ItemDetailsModalProps {
  open: boolean
  item: Item | null
  onClose: () => void
  onSend: () => void
}

const DOT_COUNT = 7

function ItemDetailsModal({ open, item, onClose, onSend }: Readonly<ItemDetailsModalProps>) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1000}
      className="send-modal"
      closeIcon={<CloseOutlined />}
      destroyOnHidden
      centered
    >
      <div className="modal-title">Item Details</div>
      <p className="modal-subtitle">
        Review product information, pricing, and specifications and other details below.
      </p>

      <div className="details-grid">
        <div>
          <div className="details-main-image">
            <div className="shoe-large" />
            <div className="details-image-dots">
              {Array.from({ length: DOT_COUNT }).map((_, i) => (
                <span key={i} className={`dot${i === 0 ? ' dot-active' : ''}`} />
              ))}
            </div>
          </div>
          <div className="thumb-row">
            <div className="shoe-thumb" />
            <div className="shoe-thumb" />
            <div className="shoe-thumb" />
          </div>
          <Card className="vendor-box">
            <div className="vendor-icon">
              <ShopOutlined />
            </div>
            <div>
              <div className="vendor-info-label">Vendor Name</div>
              <div className="vendor-info-name">AKA Vendor</div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="details-item-name">{item?.name ?? 'Item Name'}</h2>
          <div className="item-price">${item?.price ?? 23}</div>
          <div className="description-label">Description</div>
          <p className="description-text">
            Unleash urban energy with every step. These PUMA kicks fuse street-smart style with
            athletic performance, built for those who don&apos;t just walk, but move with purpose.
            Engineered with responsive cushioning, breathable mesh, and a grippy rubber sole,
            they&apos;re designed to go the distance. Unleash urban energy with every step. These
            PUMA kicks fuse street-smart style with athletic performance, built for those who
            don&apos;t just walk, but move with purpose.
          </p>

          <Card className="options-card">
            <div className="options-title">Product Options Available</div>
            <div className="option-label">Select Colors</div>
            <div className="option-row">
              <Button>Green</Button>
              <Button>Yellow</Button>
              <Button className="is-selected">Red</Button>
            </div>
            <div className="option-label">Select Size</div>
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
