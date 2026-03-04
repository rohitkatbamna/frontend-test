import {
  CheckOutlined,
  FilterOutlined,
  PlusOutlined,
  SwapOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { Button, Card, Input, List, Pagination, Radio, Select, Typography } from 'antd'
import ProductCard from '../ProductCard'
import getScreenHeight from '../../utils/getScreenHeight'
import { useAppSelector } from '../../hooks/useAppSelector'

interface ProductListProps {
  onAddProduct: () => void
}

function ProductList({ onAddProduct }: Readonly<ProductListProps>) {
  const productsList = useAppSelector((state) => state.products.products)

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
            <Button>
              <FilterOutlined />
            </Button>
            <Button icon={<CheckOutlined />}>Bulk Action</Button>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button icon={<SwapOutlined rotate={90} />} iconPlacement="end">
              Sort
            </Button>
            <Button icon={<UserAddOutlined />}> Support</Button>
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
            dataSource={productsList}
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
