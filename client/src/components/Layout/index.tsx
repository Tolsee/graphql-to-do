import React, {Fragment} from 'react';
import styled from 'styled-components';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import 'antd/lib/layout/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/icon/style/index.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const StyledMenu = styled(Menu)`
  && {
    border-color: transparent;
  }
`;
const StyledSider = styled(Sider)`
  && {
    background: ${({theme: {background}}) => background};
    box-shadow: 5px 0 8px rgba(17, 17, 17, .06)
  }
`;

class AppLayout extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <Layout style={{ minHeight: '100vh' }} tagName="main">
                    <StyledSider
                        collapsible
                        theme='light'
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <StyledMenu defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </StyledMenu>
                    </StyledSider>
                    <Layout tagName="section">
                        {children}
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
}

export default AppLayout;
