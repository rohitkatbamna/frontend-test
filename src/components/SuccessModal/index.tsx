import { Modal, Result } from 'antd'

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
      <Result
        status="success"
        title="Product added Successfully"
        subTitle="Your request has been completed"
      />
    </Modal>
  )
}

export default SuccessModal
