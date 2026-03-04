import { Button, Card, Checkbox, Collapse, Slider } from 'antd'

const categoryItems = Array.from({ length: 8 }, (_, i) => ({
  key: `c-${i}`,
  label: 'Name',
  defaultChecked: i === 0,
}))

const vendorItems = Array.from({ length: 8 }, (_, i) => ({
  key: `v-${i}`,
  label: 'Name',
  defaultChecked: i === 0,
}))

const collapseItems = [
  {
    key: 'categories',
    label: 'Categories',
    children: (
      <div className="filter-section">
        {categoryItems.map(({ key, label, defaultChecked }) => (
          <Checkbox key={key} defaultChecked={defaultChecked}>
            {label}
          </Checkbox>
        ))}
        <button type="button" className="more-link">
          +10 More
        </button>
      </div>
    ),
  },
  {
    key: 'price',
    label: 'Price Range',
    children: (
      <div className="filter-section">
        <Slider range defaultValue={[0, 8000]} max={8000} />
        <div className="range-labels">
          <span>$0</span>
          <span>$8,000</span>
        </div>
      </div>
    ),
  },
  {
    key: 'vendors',
    label: 'Vendors',
    children: (
      <div className="filter-section">
        {vendorItems.map(({ key, label, defaultChecked }) => (
          <Checkbox key={key} defaultChecked={defaultChecked}>
            {label}
          </Checkbox>
        ))}
        <button type="button" className="more-link">
          +10 More
        </button>
      </div>
    ),
  },
]

function ItemFilterPanel() {
  return (
    <Card className="filter-card">
      <div className="filter-head">
        <h3>Filters</h3>
        <Button type="link" size="small">
          Clear All
        </Button>
      </div>
      <Collapse
        defaultActiveKey={['categories', 'price', 'vendors']}
        ghost
        className="filter-collapse"
        items={collapseItems}
        expandIconPosition="end"
      />
    </Card>
  )
}

export default ItemFilterPanel
