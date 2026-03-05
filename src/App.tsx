import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from 'antd'

import PageFooter from './components/PageFooter/PageFooter'
import Sidebar from './components/Sidebar'
import ProductPage from './pages/ProductPage/ProductPage'
import SendItemPage from './pages/SendItemPage/SendItemPage'
import './App.css'

const { Sider, Content, Footer } = Layout

function App() {
  const location = useLocation()
  return (
    <FrontEndLayout padding={location.pathname === '/send-item' ? '0' : '0 24px'}>
      <Routes>
        <Route path="/" element={<Navigate to="/product-list" replace />} />
        <Route path="/product-list" element={<ProductPage />} />
        <Route path="/send-item" element={<SendItemPage />} />
        <Route path="*" element={<Navigate to="/product-list" replace />} />
      </Routes>
    </FrontEndLayout>
  )
}

function FrontEndLayout({
  children,
  padding = '0 24px',
}: Readonly<{ children: ReactNode; padding: string }>) {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992
      setIsMobile(mobile)
      setCollapsed(mobile)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) {
    return (
      <div className="app-mobile-wrapper">
        <Sidebar isMobile collapsed={collapsed} setCollapsed={setCollapsed} />
        {children}
        <PageFooter />
      </div>
    )
  }

  return (
    <Layout>
      <Sider className="app-sider" collapsed={collapsed} width={258}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout className="app-content-layout">
        <Content style={{ padding }}>{children}</Content>
        <Footer style={{ padding: 0 }}>
          <PageFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
