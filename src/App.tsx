import { Navigate, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage'
import SendItemPage from './pages/SendItemPage/SendItemPage'
import './App.css'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
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
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: '#F5F5F5', borderRight: '1px solid #E8E8E8' }}
        collapsed={collapsed}
        width={258}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
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
