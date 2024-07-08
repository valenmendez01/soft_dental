import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme } from 'antd'; // Importar theme de Ant Design
import { auth } from '../credenciales'; // Asegúrate de importar auth correctamente
import Logo from './Logo';
import MenuList from './MenuList';

const { Header, Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Home = ({ correoUsuario }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme='dark'
        className='sidebar'
      >
        <Logo />
        <MenuList />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2>Bienvenido {correoUsuario}</h2>
            <Button onClick={handleSignOut} style={{ marginLeft: '10px' }}>Log Out</Button>
          </div>
        </Header>
      </Layout>
    </Layout>
  );
};

export default Home;

