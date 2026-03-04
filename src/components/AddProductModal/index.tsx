import { InboxOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal, Select, Upload } from 'antd'

interface AddProductModalProps {
  open: boolean
  onCancel: () => void
  onSubmit: () => void
}

function AddProductModal({ open, onCancel, onSubmit }: Readonly<AddProductModalProps>) {
  const [form] = Form.useForm()

  const handleFinish = () => {
    form.resetFields()
    onSubmit()
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      width={1200}
      title={null}
      footer={null}
      destroyOnHidden
      className="add-product-modal"
    >
      <div className="modal-title">Add Product</div>
      <p className="modal-subtitle">
        Provide product details, images, and pricing to make your Product available on the platform
      </p>

      <Form form={form} onFinish={handleFinish} layout="vertical">
        <div className="form-grid">
          <div className="panel-card">
            <h3>General Information</h3>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter name' }]}
            >
              <Input size="large" placeholder="Product Name" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please enter description' }]}
            >
              <Input.TextArea rows={4} placeholder="Add Description........" />
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: 'Please select category' }]}
            >
              <Select
                size="large"
                placeholder="Select"
                options={[
                  { label: 'Fashion', value: 'fashion' },
                  { label: 'Electronics', value: 'electronics' },
                  { label: 'Beauty', value: 'beauty' },
                ]}
              />
            </Form.Item>

            <div className="half-grid">
              <Form.Item
                label="Processing Time"
                name="processingTime"
                rules={[{ required: true, message: 'Please enter time' }]}
              >
                <Input size="large" placeholder="Enter Time" />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please enter price' }]}
              >
                <Input size="large" prefix="$" placeholder="Enter Price" />
              </Form.Item>
            </div>
          </div>

          <div className="panel-card">
            <h3>Product Media</h3>
            <Form.Item
              label="Product Photos"
              name="photos"
              rules={[{ required: true, message: 'Please upload photo' }]}
            >
              <Upload.Dragger beforeUpload={() => false} maxCount={1} className="upload-box">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="upload-text">
                  Drop your Images, or <span>Click to Browse</span>
                </p>
                <p className="upload-hint">1600 x 1200 (4:3) recommended, up to 10MB</p>
              </Upload.Dragger>
            </Form.Item>
          </div>
        </div>

        <div className="modal-footer">
          <Button size="large" onClick={onCancel}>
            Cancel
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddProductModal
