import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Header from './Header'
const { Content, Footer } = Layout

export default function LayoutPage({ children }) {
    return (
        <Layout className="layout">
            <Header />
            <Content>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
}
