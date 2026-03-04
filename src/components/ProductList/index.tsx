import { FilterOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, List, Radio, Select, Typography } from 'antd'
import type { Product } from '../../types/product'
import ProductCard from '../ProductCard'

interface ProductListProps {
  products: Product[]
  onAddProduct: () => void
}

function ProductList({ products, onAddProduct }: Readonly<ProductListProps>) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
          marginTop: '12px',
        }}
      >
        <Typography.Title
          level={4}
          style={{
            margin: '0',
          }}
        >
          Product List
        </Typography.Title>
        <Select
          defaultValue="All Categories"
          options={[{ label: 'All Categories', value: 'All Categories' }]}
        />
      </div>

      <Radio.Group
        block
        options={[
          { label: 'All 47', value: 'all' },
          { label: 'Active 14', value: 'active' },
          { label: 'Inactive 2', value: 'inactive' },
        ]}
        defaultValue="Apple"
        optionType="button"
        buttonStyle="solid"
        style={{
          width: '35%',
          marginBottom: '12px',
        }}
      />

      <div className="list-shell">
        <div className="toolbar-row">
          <div className="left-actions">
            <Input size="large" placeholder="Search Product" />
            <Button size="large" icon={<FilterOutlined />} />
            <Button size="large">Bulk Action</Button>
          </div>
          <div className="right-actions">
            <Button size="large">Sort</Button>
            <Button size="large">Support</Button>
            <Button size="large" type="primary" icon={<PlusOutlined />} onClick={onAddProduct}>
              Add Product
            </Button>
          </div>
        </div>

        <List
          itemLayout="vertical"
          dataSource={products}
          renderItem={(product) => (
            <List.Item>
              <ProductCard product={product} />
            </List.Item>
          )}
          pagination={{
            total: 85,
            pageSize: 10,
            showSizeChanger: true,
            position: 'bottom',
            align: 'start',
          }}
        />
      </div>
    </div>
  )
}

export default ProductList
