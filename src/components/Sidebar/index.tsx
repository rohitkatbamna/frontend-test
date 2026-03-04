import {
  BulbOutlined,
  DashboardOutlined,
  LogoutOutlined,
  SendOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { Avatar, Layout, Menu, Switch } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const { Sider } = Layout

interface SidebarProps {
  selectedKey?: string
  userName?: string
  userRole?: string
}

const menuItems = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: 'product-list', icon: <ShoppingOutlined />, label: 'Product List' },
  { key: 'send-item', icon: <SendOutlined />, label: 'Send Item' },
  { key: 'order-list', icon: <ShoppingOutlined />, label: 'Order List' },
]

const keyToPath: Record<string, string> = {
  dashboard: '/product-list',
  'product-list': '/product-list',
  'send-item': '/send-item',
  'order-list': '/product-list',
}

const getSelectedFromPath = (pathname: string) => {
  if (pathname.startsWith('/send-item')) {
    return 'send-item'
  }

  if (pathname.startsWith('/product-list')) {
    return 'product-list'
  }

  return 'product-list'
}

function Sidebar({ selectedKey, userName = 'Mia Smith', userRole = 'Vendor' }: Readonly<SidebarProps>) {
  const location = useLocation()
  const navigate = useNavigate()
  const activeKey = selectedKey ?? getSelectedFromPath(location.pathname)

  return (
    <Sider width={248} className="product-sider" breakpoint="lg" collapsedWidth={0}>
      <div className="brand-row">
        <div className="brand-mark">B</div>
        <span>BIRDBOX</span>
      </div>

      <div className="menu-section-label">ORDER</div>
      <Menu
        mode="inline"
        selectedKeys={[activeKey]}
        items={menuItems}
        className="product-menu"
        onClick={({ key }) => navigate(keyToPath[key] ?? '/product-list')}
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
          <Avatar size={40}>{userName.charAt(0)}</Avatar>
          <div>
            <div className="user-name">{userName}</div>
            <div className="user-role">{userRole}</div>
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
