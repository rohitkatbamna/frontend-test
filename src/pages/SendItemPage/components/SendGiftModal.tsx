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
      width={1240}
      className="send-modal"
      closeIcon={<CloseOutlined />}
      destroyOnHidden
    >
      <div className="modal-title">Send Gift</div>
      <p className="modal-subtitle">
        Send a gift instantly to your recipient through filing out the details in the connect
      </p>

      <div className="gift-grid">
        <Card className="panel-card">
          <h3>Selected Item</h3>
          <Card className="selected-item-card">
            <div className="shoe-large" />
            <div className="item-name">{item?.name ?? 'Product Name'}</div>
            <div className="item-price">${item?.price ?? 23}</div>
          </Card>
        </Card>

        <div>
          <Form layout="vertical" form={form}>
            <Card className="panel-card">
              <h3>Recipient Details</h3>
              <Form.Item
                label="Recipient Email *"
                name="email"
                rules={[{ required: true, message: 'Please enter email' }]}
              >
                <Input size="large" placeholder="Enter Email" />
              </Form.Item>
              <Form.Item
                label="Recipient Name *"
                name="name"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input size="large" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item
                label="Recipient Company *"
                name="company"
                rules={[{ required: true, message: 'Please enter company' }]}
              >
                <Input size="large" placeholder="Enter Name" />
              </Form.Item>
            </Card>

            <Card className="panel-card">
              <h3>Address Details</h3>
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label="Address Line 1 *"
                    name="line1"
                    rules={[{ required: true, message: 'Please enter address' }]}
                  >
                    <Input size="large" placeholder="Enter Address" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address Line 2" name="line2">
                    <Input size="large" placeholder="Enter Address" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Country *"
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
                <Col span={12}>
                  <Form.Item
                    label="Zip Code *"
                    name="zip"
                    rules={[{ required: true, message: 'Please enter zip' }]}
                  >
                    <Input size="large" placeholder="Enter Code" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="City *"
                    name="city"
                    rules={[{ required: true, message: 'Please enter city' }]}
                  >
                    <Input size="large" placeholder="City Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="State *"
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
