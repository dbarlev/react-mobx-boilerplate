import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Footer, Sider, Content } = Layout;

class Main extends Component {

    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                <Sider width="500">
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 256, float: 'right', textAlign: 'right' }}
                    >
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="1">Option 2</Menu.Item>
                        <Menu.Item key="1">Option 3</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        )
    }
}

Main = inject('generalStore')(observer(Main))

export default Main;