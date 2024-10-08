import { Menu } from "antd";
import { CalendarOutlined, UsergroupAddOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

// eslint-disable-next-line react/prop-types
const MenuList = ({ onSelect, collapsed }) => {
  const location = useLocation();
  
  const items = [
    {
      key: 'agenda',
      icon: <CalendarOutlined />,
      label: <Link to="/agenda" className="nav-link">Agenda</Link>,
    },
    {
      key: 'odontologos',
      icon: <UserOutlined />,
      label: 'Odontólogos',
      children: [
        {
          key: 'odt1',
          label: 'Odontólogo 1',
        },
        {
          key: 'odt2',
          label: 'Odontólogo 2',
        }
      ],
    },
    {
      key: 'pacientes',
      icon: <UsergroupAddOutlined />,
      label: <Link to="/pacientes" className="nav-link">Pacientes</Link>,
    },
    {
      key: 'configuracion',
      icon: <SettingOutlined />,
      label: <Link to="/configuracion" className="nav-link">Configuración</Link>,
    },
  ];

  // Determinar el ítem seleccionado por defecto basado en la URL actual
  let defaultSelectedKey = 'agenda';
  if (location.pathname === '/agenda') {
    defaultSelectedKey = 'agenda';
  } else if (location.pathname.startsWith('/odontologos')) {
    defaultSelectedKey = 'odontologos';
  } else if (location.pathname.startsWith('/pacientes')) {
    defaultSelectedKey = 'pacientes';
  } else if (location.pathname.startsWith('/configuracion')) {
    defaultSelectedKey = 'configuracion';
  }

  return (
    <div>
      <Logo collapsed={collapsed} />
      <Menu theme='dark' mode="inline" className="menu-bar" onClick={onSelect} defaultSelectedKeys={[defaultSelectedKey]} items={items} />
    </div>
  );
};

export default MenuList;

