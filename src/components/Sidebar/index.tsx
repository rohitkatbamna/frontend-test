import {
  BulbOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { Avatar, Layout, Menu, Switch } from 'antd'

const { Sider } = Layout

const menuItems = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: 'product-list', icon: <ShoppingOutlined />, label: 'Product List' },
  { key: 'order-list', icon: <ShoppingOutlined />, label: 'Order List' },
]

function Sidebar() {
  return (
    <Sider width={248} className="product-sider" breakpoint="lg" collapsedWidth={0}>
      <div className="brand-row">
        <div className="brand-mark">B</div>
        <span>BIRDBOX</span>
      </div>

      <div className="menu-section-label">ORDER</div>
      <Menu
        mode="inline"
        selectedKeys={['product-list']}
        items={menuItems}
        className="product-menu"
      />

      <div className="menu-section-label">SYSTEM</div>
      <Menu
        mode="inline"
        items={[
          { key: 'notifications', icon: <BulbOutlined />, label: 'Notifications' },
          {
            key: 'dark-mode',
            icon: <BulbOutlined />,
            label: (
              <div className="dark-mode-row">
                <span>Dark Mode</span>
                <Switch size="small" />
              </div>
            ),
          },
        ]}
        className="product-menu system-menu"
      />

      <div className="sider-bottom">
        <div className="user-row">
          <Avatar size={40}>M</Avatar>
          <div>
            <div className="user-name">Mia Smith</div>
            <div className="user-role">Vendor</div>
          </div>
        </div>
        <button type="button" className="logout-btn">
          <LogoutOutlined />
          <span>Log Out</span>
        </button>
      </div>
    </Sider>
  )
}

export default Sidebar
