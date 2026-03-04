import {
  BellFilled,
  LayoutFilled,
  LeftOutlined,
  LogoutOutlined,
  MoonFilled,
  ProductFilled,
  RightOutlined,
  TruckFilled,
} from '@ant-design/icons'
import { Avatar, Button, Menu, Switch } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import BirdBoxIcon from '../../assets/BirdBoxIcon'
import getScreenHeight from '../../utils/getScreenHeight'
import './Sidebar.css'

interface SidebarProps {
  selectedKey?: string
  userName?: string
  userRole?: string
  collapsed?: boolean
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>
  isMobile?: boolean
}

interface MobileSidebarProps {
  selectedKey?: string
  userName: string
  userRole: string
}

const keyToPath: Record<string, string> = {
  dashboard: '/dashboard',
  'product-list': '/product-list',
  'send-item': '/send-item',
  notifications: '/product-list',
}

const getSelectedFromPath = (pathname: string): string => {
  if (pathname.startsWith('/send-item')) return 'send-item'
  if (pathname.startsWith('/product-list')) return 'product-list'
  if (pathname.startsWith('/dashboard')) return 'dashboard'
  return 'product-list'
}

function Sidebar({
  selectedKey,
  userName = 'Mia Smith',
  userRole = 'Vendor',
  collapsed = false,
  isMobile = false,
  setCollapsed = () => {},
}: Readonly<SidebarProps>) {
  const location = useLocation()
  const navigate = useNavigate()
  const activeKey = selectedKey ?? getSelectedFromPath(location.pathname)

  if (isMobile) {
    return (
      <MobileSidebar selectedKey={selectedKey} userName={userName} userRole={userRole} />
    )
  }

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'dark-mode') return
    navigate(keyToPath[key] ?? '/product-list')
  }

  return (
    <>
      <div style={{ height: getScreenHeight(), overflow: 'auto' }}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <BirdBoxIcon />
            {!collapsed && <span>BIRDBOX</span>}
          </div>
          <Button
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            size="small"
          >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </Button>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          style={{ backgroundColor: '#F5F5F5', border: 'none' }}
          inlineCollapsed={collapsed}
          onClick={handleMenuClick}
          items={[
            {
              key: 'dashboard',
              icon: <LayoutFilled />,
              label: 'Dashboard',
            },
            {
              key: 'order',
              label: 'ORDER',
              type: 'group',
              children: [
                { key: 'product-list', icon: <ProductFilled />, label: 'Product List' },
                { key: 'send-item', icon: <TruckFilled />, label: 'Send Item' },
              ],
            },
            {
              key: 'system',
              label: 'SYSTEM',
              type: 'group',
              children: [
                { key: 'notifications', icon: <BellFilled />, label: 'Notifications' },
                {
                  key: 'dark-mode',
                  icon: <MoonFilled />,
                  label: (
                    <div
                      className="dark-mode-row"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Dark Mode</span>
                      <Switch size="small" />
                    </div>
                  ),
                },
              ],
            },
          ]}
        />
      </div>

      <div className="sider-bottom">
        <div className="user-row">
          <Avatar size={40}>{userName.charAt(0)}</Avatar>
          {!collapsed && (
            <div>
              <div className="user-name">{userName}</div>
              <div className="user-role">{userRole}</div>
            </div>
          )}
        </div>
        <button type="button" className="logout-btn">
          <LogoutOutlined />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </>
  )
}

function MobileSidebar({ selectedKey, userName, userRole }: Readonly<MobileSidebarProps>) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeKey = selectedKey ?? getSelectedFromPath(location.pathname)

  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <div className="mobile-sidebar-title">
          <BirdBoxIcon />
          <span>BIRDBOX</span>
        </div>
        <div className="mobile-sidebar-user">
          <Avatar size={32}>{userName.charAt(0)}</Avatar>
          <div>
            <div className="user-name">{userName}</div>
            <div className="user-role">{userRole}</div>
          </div>
        </div>
        <div className="dark-mode-row">
          <span>Dark Mode</span>
          <Switch size="small" />
        </div>
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[activeKey]}
        onClick={({ key }) => navigate(keyToPath[key] ?? '/product-list')}
        items={[
          { key: 'dashboard', icon: <LayoutFilled />, label: 'Dashboard' },
          { key: 'product-list', icon: <ProductFilled />, label: 'Product List' },
          { key: 'send-item', icon: <TruckFilled />, label: 'Send Item' },
          { key: 'notifications', icon: <BellFilled />, label: 'Notifications' },
        ]}
      />
    </div>
  )
}

export default Sidebar
