import { FilterOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, Input, List, Pagination, Radio, Select, Typography } from 'antd'
import type { Product } from '../../types/product'
import ProductCard from '../ProductCard'
import getScreenHeight from '../../utils/getScreenHeight'

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

      <Card
        styles={{
          body: {
            padding: '20px',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <Input placeholder="Search Product" />
            <Button icon={<FilterOutlined />} />
            <Button>Bulk Action</Button>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button>Sort</Button>
            <Button>Support</Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={onAddProduct}>
              Add Product
            </Button>
          </div>
        </div>
        <Card
          styles={{
            body: {
              padding: '0px',
            },
          }}
        >
          <List
            itemLayout="vertical"
            dataSource={products}
            renderItem={(product) => (
              <List.Item>
                <ProductCard product={product} />
              </List.Item>
            )}
            split={false}
            style={{
              padding: '0px 24px',
              backgroundColor: '#FAFAFA',
              borderRadius: '8px',
              height: getScreenHeight(280),
              overflow: 'auto',
            }}
          />
          <Pagination
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '12px 24px',
              borderTop: '1px solid #E8E8E8',
            }}
            total={50}
            pageSize={10}
            showSizeChanger={true}
          />
        </Card>
      </Card>
    </div>
  )
}

export default ProductList
