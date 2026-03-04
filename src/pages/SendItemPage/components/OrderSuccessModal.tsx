import { CheckOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

interface OrderSuccessModalProps {
  open: boolean
  onClose: () => void
}

function OrderSuccessModal({ open, onClose }: Readonly<OrderSuccessModalProps>) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={620}
      centered
      className="success-modal"
      destroyOnHidden
    >
      <div className="success-content">
        <div className="success-icon">
          <CheckOutlined />
        </div>
        <h2>Order Sent Successfully!</h2>
        <p>Your Order has been successfully created.</p>
      </div>
    </Modal>
  )
}

export default OrderSuccessModal
