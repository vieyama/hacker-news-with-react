import { Avatar, Col, Menu, Row } from 'antd'
import { isUndefined } from 'lodash'
import React from 'react'
import { useHistory } from 'react-router'

export default function HeaderPage() {
    const history = useHistory()
    const activePath = window.location.pathname

    const keyArray = [
        {
            path: '/',
            key: '1',
        },
        {
            path: '/news',
            key: '2',
        },
        {
            path: '/ask',
            key: '3',
        },
        {
            path: '/job',
            key: '4',
        },
    ]

    return (
        <Row className="header">
            <Col span={4} className="logo">
                <Avatar size="large" className="avatar">
                    HN
                </Avatar>
            </Col>
            <Col span={20} className="header-menu">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[
                        isUndefined(keyArray.find((e) => e.path === activePath))
                            ? '1'
                            : keyArray.find((e) => e.path === activePath).key,
                    ]}
                >
                    <Menu.Item key="1" onClick={() => history.push('/')}>
                        Top
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => history.push('/news')}>
                        New
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => history.push('/ask')}>
                        Ask
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => history.push('/job')}>
                        Job
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    )
}
