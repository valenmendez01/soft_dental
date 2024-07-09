import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme } from 'antd'; // Importar theme de Ant Design
import { auth } from '../credenciales'; // Asegúrate de importar auth correctamente
import Logo from './Logo';
import MenuList from './MenuList';
import AñadirPaciente from './AñadirPaciente'

const { Header, Sider, Content } = Layout;

// eslint-disable-next-line react/prop-types
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState('inicio');
  const handleMenuSelect = ({ key }) => {
    setSelectedMenuItem(key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'inicio':
        return <div>Contenido de Inicio</div>;
      case 'agenda':
        return <div>Contenido de Agenda</div>;
      case 'Tarea-1':
        return <div>Contenido de Tarea 1</div>;
      case 'Tarea-2':
        return <div>Contenido de Tarea 2</div>;
      case 'Subtarea-1':
        return <div>Contenido de Subtarea 1</div>;
      case 'pacientes':
        return <div><AñadirPaciente/></div>;
      case 'odontólogos':
        return <div>Contenido de Odontólogos</div>;
      case 'configuracion':
        return <div>
          Contenido de Configuración
          <Button onClick={handleSignOut} style={{ marginLeft: '10px' }}>Log Out</Button>
        </div>;
      default:
        return <div>Selecciona una opción del menú</div>;
    }
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
        <MenuList onSelect={handleMenuSelect} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        <Content>
          <div style={{ display: 'flex', alignItems: 'center' }}></div>
          <div style={{ marginTop: '20px' }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;

