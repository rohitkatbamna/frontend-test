import { Navigate, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage'
import SendItemPage from './pages/SendItemPage/SendItemPage'
import './App.css'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'

const { Sider, Content } = Layout

function App() {
  return (
    <FrontEndLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/product-list" replace />} />
        <Route path="/product-list" element={<ProductPage />} />
        <Route path="/send-item" element={<SendItemPage />} />
        <Route path="*" element={<Navigate to="/product-list" replace />} />
      </Routes>
    </FrontEndLayout>
  )
}

function FrontEndLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Auto-collapse on mobile, auto-expand on desktop
      if (mobile && !collapsed) {
        setCollapsed(true)
      } else if (!mobile && collapsed) {
        setCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [collapsed, setCollapsed])

  if (isMobile) {
    return (
      <div>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} />
        {children}
      </div>
    )
  }

  return (
    <Layout>
      <Sider
        style={{ backgroundColor: '#F5F5F5', borderRight: '1px solid #E8E8E8' }}
        collapsed={collapsed}
        width={258}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} />
      </Sider>
      <Layout
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default App
