import { SearchOutlined, SortAscendingOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import type { Item } from '../../types/item'

import ItemCard from './components/ItemCard'
import ItemDetailsModal from './components/ItemDetailsModal'
import ItemFilterPanel from './components/ItemFilterPanel'
import OrderSuccessModal from './components/OrderSuccessModal'
import SendGiftModal from './components/SendGiftModal'

import './SendItemPage.css'

function SendItemPage() {
  const items = useSelector((state: RootState) => state.items.items)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [showItemDetails, setShowItemDetails] = useState(false)
  const [showSendGift, setShowSendGift] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [form] = Form.useForm()

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
        <Typography.Title level={1}>Send Item</Typography.Title>
        <div className="send-actions">
          <Input
            size="large"
            placeholder="Search Items..."
            prefix={<SearchOutlined style={{ color: '#bbb' }} />}
          />
          <Button size="large" icon={<SortAscendingOutlined />}>
            Sort
          </Button>
        </div>
      </div>

      <div className="send-shell">
        <ItemFilterPanel />
        <div className="item-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onClick={openItemDetails} />
          ))}
        </div>
      </div>

      <ItemDetailsModal
        open={showItemDetails}
        item={selectedItem}
        onClose={() => setShowItemDetails(false)}
        onSend={openSendGift}
      />

      <SendGiftModal
        open={showSendGift}
        item={selectedItem}
        form={form}
        onClose={() => setShowSendGift(false)}
        onConfirm={confirmOrder}
      />

      <OrderSuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  )
}

export default SendItemPage
