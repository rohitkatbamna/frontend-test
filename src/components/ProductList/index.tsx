import {
  CheckOutlined,
  FilterOutlined,
  PlusOutlined,
  SwapOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { Button, Card, Input, List, Pagination, Radio, Select, Typography } from 'antd'
import { useState } from 'react'
import ProductCard from '../ProductCard'
import getScreenHeight from '../../utils/getScreenHeight'
import { useAppSelector } from '../../hooks/useAppSelector'
import './ProductList.css'

interface ProductListProps {
  onAddProduct: () => void
}

type FilterValue = 'all' | 'active' | 'inactive'

const CATEGORY_OPTIONS = [{ label: 'All Categories', value: 'all' }]

function ProductList({ onAddProduct }: Readonly<ProductListProps>) {
  const products = useAppSelector((state) => state.products.products)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterValue>('all')

  const counts = {
    all: products.length,
    active: products.filter((p) => p.status === 'Active').length,
    inactive: products.filter((p) => p.status === 'Inactive').length,
  }

  const filtered = products.filter((p) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && p.status === 'Active') ||
      (filter === 'inactive' && p.status === 'Inactive')
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div>
      <div className="product-list__header">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Product List
        </Typography.Title>
        <Select options={CATEGORY_OPTIONS} defaultValue="all" />
      </div>

      <Radio.Group
        block
        className="product-list__tabs"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        optionType="button"
        buttonStyle="solid"
        options={[
          { label: `All ${counts.all}`, value: 'all' },
          { label: `Active ${counts.active}`, value: 'active' },
          { label: `Inactive ${counts.inactive}`, value: 'inactive' },
        ]}
      />

      <Card styles={{ body: { padding: 20 } }}>
        <div className="product-list__toolbar">
          <div className="product-list__toolbar-left">
            <Input
              placeholder="Search Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
            />
            <Button icon={<FilterOutlined />} className="hide-mobile" />
            <Button icon={<CheckOutlined />} className="hide-mobile">
              Bulk Action
            </Button>
          </div>
          <div className="product-list__toolbar-right">
            <Button icon={<SwapOutlined rotate={90} />} iconPlacement="end" className="hide-mobile">
              Sort
            </Button>
            <Button icon={<UserAddOutlined />} className="hide-mobile">
              Support
            </Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={onAddProduct}>
              Add Product
            </Button>
          </div>
        </div>

        <Card styles={{ body: { padding: 0 } }}>
          <List
            itemLayout="vertical"
            dataSource={filtered}
            renderItem={(product) => (
              <List.Item>
                <ProductCard product={product} />
              </List.Item>
            )}
            split={false}
            className="product-list__items"
            style={{ height: getScreenHeight(280) }}
          />
          <Pagination
            className="product-list__pagination"
            total={filtered.length}
            pageSize={10}
            showSizeChanger
          />
        </Card>
      </Card>
    </div>
  )
}

export default ProductList
