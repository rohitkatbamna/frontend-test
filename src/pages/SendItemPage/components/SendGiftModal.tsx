import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Modal, Row, Select } from 'antd'
import type { FormInstance } from 'antd'
import type { Item } from '../../../types/item'

interface SendGiftModalProps {
  open: boolean
  item: Item | null
  form: FormInstance
  onClose: () => void
  onConfirm: () => void
}

function SendGiftModal({ open, item, form, onClose, onConfirm }: Readonly<SendGiftModalProps>) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1100}
      className="send-modal"
      closeIcon={<CloseOutlined />}
      destroyOnHidden
    >
      <div className="modal-title">Send Gift</div>
      <p className="modal-subtitle">
        Send a gift instantly to your recipient through filling out the details in the form below.
      </p>

      <div className="gift-grid">
        <Card className="gift-left-panel">
          <h3>Selected Item</h3>
          <Card className="selected-item-preview">
            <div className="shoe-large" />
            <div className="item-name">{item?.name ?? 'Product Name'}</div>
            <div className="item-price">${item?.price ?? 23}</div>
          </Card>
        </Card>

        <div className="gift-right-section">
          <Form layout="vertical" form={form}>
            <Card className="gift-section-card">
              <div className="gift-section-title">Recipient Details</div>
              <Form.Item
                label="Recipient Email "
                name="email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input size="large" placeholder="Enter Email" />
              </Form.Item>
              <Form.Item
                label="Recipient Name "
                name="name"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input size="large" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item
                label="Recipient Company "
                name="company"
                rules={[{ required: true, message: 'Please enter company' }]}
              >
                <Input size="large" placeholder="Enter Company" />
              </Form.Item>
            </Card>
            <Card className="gift-section-card">
              <div className="gift-section-title">Address Details</div>
              <Row gutter={12}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Address Line 1 "
                    name="line1"
                    rules={[{ required: true, message: 'Please enter address' }]}
                  >
                    <Input size="large" placeholder="Enter Address" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Address Line 2" name="line2">
                    <Input size="large" placeholder="Enter Address" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: true, message: 'Please select country' }]}
                  >
                    <Select
                      size="large"
                      placeholder="Country Name"
                      options={[{ label: 'United States', value: 'us' }]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Zip Code"
                    name="zip"
                    rules={[{ required: true, message: 'Please enter zip' }]}
                  >
                    <Input size="large" placeholder="Enter Code" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please enter city' }]}
                  >
                    <Input size="large" placeholder="City Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'Please enter state' }]}
                  >
                    <Input size="large" placeholder="State Name" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Form>
        </div>
      </div>

      <div className="modal-footer">
        <Button size="large" icon={<ArrowLeftOutlined />} onClick={onClose}>
          Back
        </Button>
        <Button size="large" type="primary" onClick={onConfirm}>
          Confirm Order
        </Button>
      </div>
    </Modal>
  )
}

export default SendGiftModal
