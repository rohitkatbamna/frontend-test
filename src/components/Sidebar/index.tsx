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
import { useLocation, useNavigate } from 'react-router-dom'
import BirdBoxIcon from '../../assets/BirdBoxIcon'
import getScreenHeight from '../../utils/getScreenHeight'

interface SidebarProps {
  selectedKey?: string
  userName?: string
  userRole?: string
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean | ((prev: boolean) => boolean)) => void
  isMobile?: boolean
}

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
      <MobileSidebar
        selectedKey={selectedKey}
        userName={userName}
        userRole={userRole}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />
    )
  }

  return (
    <>
      <div
        style={{
          height: getScreenHeight(),
          overflow: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            gap: '2px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <BirdBoxIcon />
            {!collapsed && <span>BIRDBOX</span>}
          </div>
          {isMobile ? (
            <></>
          ) : (
            <Button
              onClick={() => setCollapsed((prev: boolean) => !prev)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              size="small"
            >
              {collapsed ? <RightOutlined /> : <LeftOutlined />}
            </Button>
          )}
        </div>
        <Menu
          mode={isMobile ? 'horizontal' : 'inline'}
          selectedKeys={[activeKey]}
          style={{ backgroundColor: '#F5F5F5', border: 'none' }}
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
                {
                  key: 'product-list',
                  icon: <ProductFilled />,
                  label: 'Product List',
                },
                {
                  key: 'send-item',
                  icon: <TruckFilled />,
                  label: 'Send Item',
                },
              ],
            },
            {
              key: 'system',
              label: 'SYSTEM',
              type: 'group',
              children: [
                {
                  key: 'notifications',
                  icon: <BellFilled />,
                  label: 'Notifications',
                },
                {
                  key: 'dark-mode',
                  icon: <MoonFilled />,
                  label: (
                    <div className="dark-mode-row">
                      <span>Dark Mode</span>
                      <Switch size="small" />
                    </div>
                  ),
                },
              ],
            },
          ]}
          onClick={({ key }) => navigate(keyToPath[key] ?? '/product-list')}
          inlineCollapsed={collapsed}
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

function MobileSidebar({
  selectedKey,
  userName,
  userRole,
  collapsed,
  setCollapsed,
  isMobile,
}: MobileSidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeKey = selectedKey ?? getSelectedFromPath(location.pathname)

  return (
    <div className="mobile-sidebar">
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div className="mobile-sidebar-title">
          <BirdBoxIcon />
          <span>BIRDBOX</span>
        </div>
        <div className="dark-mode-row">
          <span>Dark Mode</span>
          <Switch size="small" />
        </div>
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[activeKey]}
        items={[
          {
            key: 'dashboard',
            icon: <LayoutFilled />,
            label: 'Dashboard',
          },

          {
            key: 'product-list',
            icon: <ProductFilled />,
            label: 'Product List',
          },
          {
            key: 'send-item',
            icon: <TruckFilled />,
            label: 'Send Item',
          },
          {
            key: 'notifications',
            icon: <BellFilled />,
            label: 'Notifications',
          },
        ]}
        onClick={({ key }) => navigate(keyToPath[key] ?? '/product-list')}
      />
    </div>
  )
}

export default Sidebar
