import { Navigate, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage'
import SendItemPage from './pages/SendItemPage/SendItemPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product-list" replace />} />
      <Route path="/product-list" element={<ProductPage />} />
      <Route path="/send-item" element={<SendItemPage />} />
      <Route path="*" element={<Navigate to="/product-list" replace />} />
    </Routes>
  )
}

export default App
