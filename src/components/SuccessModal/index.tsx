import { CheckOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

interface SuccessModalProps {
  open: boolean
  onClose: () => void
}

function SuccessModal({ open, onClose }: Readonly<SuccessModalProps>) {
  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
      width={620}
      centered
      className="success-modal"
      destroyOnHidden
    >
      <div className="success-content">
        <div className="success-icon">
          <CheckOutlined />
        </div>
        <h2>Product added Successfully</h2>
        <p>Your request has been completed</p>
      </div>
    </Modal>
  )
}

export default SuccessModal
