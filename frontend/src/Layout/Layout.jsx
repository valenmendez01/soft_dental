import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../components/utils/Routers'
import MenuList from '../components/MenuList'
import { Layout as AntdLayout } from "antd";
import { useState } from 'react';

const { Sider, Content } = AntdLayout;

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const siderWidth = collapsed ? 80 : 200; // Ajusta el ancho del sidebar según el estado
  const headerLeft = collapsed ? 80 : 200; // Ajusta la posición del header según el estado
  const headerWidth = `calc(100% - ${siderWidth}px)`; // Ajusta el ancho del header según el estado
  const contentMarginLeft = siderWidth; // Ajusta el margen izquierdo del contenido según el estado
  const footerLeft = headerLeft; // Ajusta la posición del footer según el estado
  
  const siderStyle = { // Hace al sidebar estático a lo largo de la pagina
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
  };

  const headerStyle = {
    position: 'fixed',
    width: headerWidth, // Ajusta el ancho del header teniendo en cuenta el sidebar
    top: 0,
    left: headerLeft, // Ajusta el valor según el ancho de tu sidebar
    transition: 'width 0.2s, left 0.2s', // Agrega transición para el ancho y la posición
    zIndex: 1000, // Asegúrate de que esté por encima del contenido
  };

  const contentStyle = {
    marginInlineStart: contentMarginLeft, // Deja espacio para el sidebar
    marginTop: 64, // Deja espacio para el header (ajusta según el tamaño del header)
    minHeight: 'calc(100vh - 64px - 64px)', // Ajusta para tener suficiente espacio para el contenido
    paddingBottom: 64, // Asegura que el contenido no quede detrás del footer
    transition: 'margin-left 0.3s', // Agrega transición para el margen izquierdo
  };

  const footerStyle = {
    position: 'relative',
    width: headerWidth, // Ajusta el ancho del footer teniendo en cuenta el sidebar
    bottom: 0,
    left: footerLeft, // Ajusta el valor según el ancho de tu sidebar
    transition: 'width 0.2s, left 0.2s', // Agrega transición para el ancho y la posición
  };

  return (
    <AntdLayout>
      <Sider style={siderStyle} collapsed={collapsed} collapsible trigger={null}>
        <MenuList collapsed={collapsed} />
      </Sider>
      <AntdLayout >
        <div style={headerStyle}>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div style={contentStyle}>
          <Content>
            <Routers />
          </Content>
        </div>
        <div style={footerStyle}>
          <Footer />
        </div>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout