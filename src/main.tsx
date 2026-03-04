import { StrictMode } from 'react'
import type { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

import { store } from './store/store'
import App from './App.tsx'
import './index.css'

const requiredMark = (label: ReactNode, { required }: { required: boolean }) => (
  <>
    {label}
    {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
  </>
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <ConfigProvider
        theme={{
          token: { fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
        }}
        form={{ requiredMark }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </StrictMode>
  </Provider>
)
