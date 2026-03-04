import { DownOutlined, GlobalOutlined } from '@ant-design/icons'
import './PageFooter.css'

function PageFooter() {
  return (
    <div className="page-footer">
      <div>
        @2025 Send365. All Right Reserved
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        Version 2.8.1
      </div>
      <div className="footer-lang">
        <GlobalOutlined />
        English
        <DownOutlined style={{ fontSize: 11 }} />
      </div>
    </div>
  )
}

export default PageFooter
