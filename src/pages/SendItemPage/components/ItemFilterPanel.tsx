import { Button, Card, Checkbox, Divider, Slider } from 'antd'

function ItemFilterPanel() {
  return (
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
  )
}

export default ItemFilterPanel
