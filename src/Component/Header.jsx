import React from 'react';
import './Header.sass';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = (props) => {
  return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Students</Menu.Item>
            <Menu.Item key="2">Coming Soon.</Menu.Item>
          </Menu>
        </Header>
      </Layout>
  );
}

Header.defaultProps = {
  title: "Students' list"
}

const styleHeader = {
  color: 'green',
  fontSize: '20px',
}
 
export default Navbar;