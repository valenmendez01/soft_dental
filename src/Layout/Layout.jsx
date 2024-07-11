import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../components/utils/Routers'
import MenuList from '../components/MenuList'
import { Layout as AntdLayout } from "antd";
import { useState } from 'react';

const { Sider, Content } = AntdLayout;

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout>
      <Sider collapsed={collapsed} collapsible trigger={null}>
        <MenuList collapsed={collapsed} />
      </Sider>
      <AntdLayout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content>
          <Routers />
        </Content>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout