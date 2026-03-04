import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'

import PageFooter from './components/PageFooter/PageFooter'
import Sidebar from './components/Sidebar'
import ProductPage from './pages/ProductPage/ProductPage'
import SendItemPage from './pages/SendItemPage/SendItemPage'
import './App.css'

const { Sider, Content, Footer } = Layout

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

function FrontEndLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
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
        <Content>{children}</Content>
        <Footer style={{ padding: 0 }}>
          <PageFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
