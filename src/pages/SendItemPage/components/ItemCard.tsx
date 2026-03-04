import { Card } from 'antd'
import type { Item } from '../../../types/item'

interface ItemCardProps {
  item: Item
  onClick: (item: Item) => void
}

function ItemCard({ item, onClick }: Readonly<ItemCardProps>) {
  return (
    <Card className="send-item-card" onClick={() => onClick(item)}>
      <div className="shoe-hero" />
      <div className="dots">........</div>
      <div className="item-name">{item.name}</div>
      <div className="item-price">${item.price}</div>
      <div className="item-vendor-label">Vendor</div>
      <div className="item-vendor">{item.vendor}</div>
    </Card>
  )
}

export default ItemCard
