import { Modal, Result } from 'antd'

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
      <Result
        status="success"
        title="Order Sent Successfully!"
        subTitle="Your Order has been successfully created."
      />
    </Modal>
  )
}

export default OrderSuccessModal
