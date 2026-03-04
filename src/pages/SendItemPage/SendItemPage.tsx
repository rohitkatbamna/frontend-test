import { ArrowLeftOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Col, Divider, Form, Input, Modal, Row, Select, Slider } from 'antd'
import { useMemo, useState } from 'react'

import './SendItemPage.css'

interface Item {
  id: number
  name: string
  vendor: string
  price: number
}

const items: Item[] = [
  { id: 1, name: 'Item Name', vendor: 'Amazon', price: 23 },
  { id: 2, name: 'Item Name', vendor: 'Amazon', price: 23 },
  { id: 3, name: 'Item Name', vendor: 'Amazon', price: 23 },
  { id: 4, name: 'Item Name', vendor: 'Amazon', price: 23 },
]

function SendItemPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [showItemDetails, setShowItemDetails] = useState(false)
  const [showSendGift, setShowSendGift] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [form] = Form.useForm()

  const cards = useMemo(() => items, [])

  const openItemDetails = (item: Item) => {
    setSelectedItem(item)
    setShowItemDetails(true)
  }

  const openSendGift = () => {
    setShowItemDetails(false)
    setShowSendGift(true)
  }

  const confirmOrder = async () => {
    try {
      await form.validateFields()
      setShowSendGift(false)
      setShowSuccess(true)
      form.resetFields()
    } catch {
      // validation errors are displayed by antd form
    }
  }

  return (
    <div>
      <div className="send-top-row">
        <h1>Send Item</h1>
        <div className="send-actions">
          <Input size="large" placeholder="Search items..." />
          <Button size="large">Sort</Button>
        </div>
      </div>

      <div className="send-shell">
        <Card className="filter-card">
          <div className="filter-head">
            <h3>Filters</h3>
            <Button>Clear All</Button>
          </div>

          <div className="filter-section">
            <div className="filter-title">Categories</div>
            {Array.from({ length: 8 }).map((_, index) => (
              <Checkbox key={`c-${index}`} defaultChecked={index === 0}>
                Name
              </Checkbox>
            ))}
            <button type="button" className="more-link">
              +10 More
            </button>
          </div>

          <Divider />

          <div className="filter-section">
            <div className="filter-title">Price Range</div>
            <Slider range defaultValue={[0, 8000]} max={8000} />
            <div className="range-labels">
              <span>$0</span>
              <span>$8,000</span>
            </div>
          </div>

          <Divider />

          <div className="filter-section">
            <div className="filter-title">Vendors</div>
            {Array.from({ length: 8 }).map((_, index) => (
              <Checkbox key={`v-${index}`} defaultChecked={index === 0}>
                Name
              </Checkbox>
            ))}
            <button type="button" className="more-link">
              +10 More
            </button>
          </div>
        </Card>

        <div className="item-grid">
          {cards.map((item) => (
            <Card key={item.id} className="send-item-card" onClick={() => openItemDetails(item)}>
              <div className="shoe-hero" />
              <div className="dots">........</div>
              <div className="item-name">{item.name}</div>
              <div className="item-price">${item.price}</div>
              <div className="item-vendor-label">Vendor</div>
              <div className="item-vendor">{item.vendor}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="send-page-footer">
        <div>@2025 Send365. All Right Reserved Privacy Policy Version 2.8.1</div>
        <div>English</div>
      </div>

      <Modal
        open={showItemDetails}
        onCancel={() => setShowItemDetails(false)}
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
            <h2 className="details-item-name">{selectedItem?.name ?? 'Item Name'}</h2>
            <div className="item-price">${selectedItem?.price ?? 23}</div>
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
          <Button
            size="large"
            icon={<ArrowLeftOutlined />}
            onClick={() => setShowItemDetails(false)}
          >
            Back
          </Button>
          <Button size="large" type="primary" onClick={openSendGift}>
            Send Item
          </Button>
        </div>
      </Modal>

      <Modal
        open={showSendGift}
        onCancel={() => setShowSendGift(false)}
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
              <div className="item-name">{selectedItem?.name ?? 'Product Name'}</div>
              <div className="item-price">${selectedItem?.price ?? 23}</div>
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
          <Button size="large" icon={<ArrowLeftOutlined />} onClick={() => setShowSendGift(false)}>
            Back
          </Button>
          <Button size="large" type="primary" onClick={confirmOrder}>
            Confirm Order
          </Button>
        </div>
      </Modal>

      <Modal
        open={showSuccess}
        onCancel={() => setShowSuccess(false)}
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
    </div>
  )
}

export default SendItemPage
