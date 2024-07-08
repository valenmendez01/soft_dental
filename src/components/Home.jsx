import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Layout } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme } from 'antd'; // Importar theme de Ant Design

const auth = getAuth(appFirebase);
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
    <div>
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
            <h2>Bienvenido {correoUsuario}<button onClick={handleSignOut}>-Log Out</button></h2>
          </Header>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
