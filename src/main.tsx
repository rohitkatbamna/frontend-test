import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </StrictMode>
  </Provider>
)
