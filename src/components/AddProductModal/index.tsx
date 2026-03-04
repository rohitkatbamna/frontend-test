import { InboxOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Select,
  Typography,
  Upload,
} from 'antd'

import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addProduct } from '../../store/productSlice'
import type { Product } from '../../types/product'
import './AddProductModal.css'

interface AddProductModalProps {
  open: boolean
  onCancel: () => void
  onSubmit: () => void
}

interface ProductFormValues {
  name: string
  description: string
  category: string
  processingTime: string
  price: number
  photos: unknown
}

const CATEGORY_OPTIONS = [
  { label: 'Fashion', value: 'fashion' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Beauty', value: 'beauty' },
]

const MODAL_BODY_STYLES = { backgroundColor: '#fafafa', padding: 24, borderRadius: 8 }
const MODAL_CONTAINER_STYLES = { padding: '0px' }

function AddProductModal({ open, onCancel, onSubmit }: Readonly<AddProductModalProps>) {
  const [form] = Form.useForm<ProductFormValues>()
  const dispatch = useAppDispatch()

  const handleFinish = (values: ProductFormValues) => {
    const newProduct: Product = {
      id: `PRD-${Date.now().toString().slice(-5)}`,
      name: values.name,
      price: values.price,
      status: 'Active',
      category: values.category,
    }
    dispatch(addProduct(newProduct))
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
      styles={{ body: MODAL_BODY_STYLES, container: MODAL_CONTAINER_STYLES }}
    >
      <Typography.Title level={4} style={{ marginBottom: 4 }}>
        Add Product
      </Typography.Title>
      <Typography.Paragraph className="add-product-modal__subtitle">
        Provide product details, images, and pricing to make your Product available on the platform
      </Typography.Paragraph>

      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Row gutter={16} align="stretch">
          <Col xs={24} md={12}>
            <Card variant="outlined" className="add-product-modal__card">
              <Typography.Title level={5} className="add-product-modal__card-title">
                General Information
              </Typography.Title>
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
                <Input.TextArea size="large" rows={4} placeholder="Add Description........" />
              </Form.Item>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please select category' }]}
              >
                <Select size="large" placeholder="Select" options={CATEGORY_OPTIONS} />
              </Form.Item>
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label="Processing Time"
                    name="processingTime"
                    rules={[{ required: true, message: 'Please enter time' }]}
                  >
                    <Input size="large" placeholder="Enter Time" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please enter price' }]}
                  >
                    <InputNumber
                      size="large"
                      prefix="$"
                      placeholder="Enter Price"
                      min={0}
                      precision={2}
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card variant="outlined" className="add-product-modal__card">
              <Typography.Title level={5} className="add-product-modal__card-title">
                Product Media
              </Typography.Title>
              <Form.Item
                label="Product Photos"
                name="photos"
                rules={[{ required: true, message: 'Please upload a photo' }]}
              >
                <Upload.Dragger beforeUpload={() => false} maxCount={1}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <Typography.Text>
                    Drop your Images, or{' '}
                    <Typography.Text className="add-product-modal__upload-browse">
                      Click to Browse
                    </Typography.Text>
                  </Typography.Text>
                  <Typography.Paragraph className="add-product-modal__upload-hint">
                    1600 x 1200 (4:3) recommended, up to 10MB
                  </Typography.Paragraph>
                </Upload.Dragger>
              </Form.Item>
            </Card>
          </Col>
        </Row>

        <div className="modal-footer">
          <Space>
            <Button size="large" onClick={onCancel}>
              Cancel
            </Button>
            <Button size="large" type="primary" htmlType="submit">
              Add Product
            </Button>
          </Space>
        </div>
      </Form>
    </Modal>
  )
}

export default AddProductModal
