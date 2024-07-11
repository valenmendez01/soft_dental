import { Menu } from "antd";
import { HomeOutlined, CalendarOutlined, BarsOutlined, UsergroupAddOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Logo from "./Logo";

// eslint-disable-next-line react/prop-types
const MenuList = ({ onSelect, collapsed }) => {
  const items = [
    {
      key: 'inicio',
      icon: <HomeOutlined />,
      label: <Link to="/home" className="nav-link">Inicio</Link>,
    },
    {
      key: 'agenda',
      icon: <CalendarOutlined />,
      label: <Link to="/agenda" className="nav-link">Agenda</Link>,
    },
    {
      key: 'tareas',
      icon: <BarsOutlined />,
      label: 'Tareas',
      children: [
        {
          key: 'tarea-1',
          label: 'Tarea 1',
        },
        {
          key: 'tarea-2',
          label: 'Tarea 2',
        },
        {
          key: 'subtarea',
          label: 'Subtarea',
          children: [
            {
              key: 'subtarea-1',
              label: 'Subtarea 1',
            },
          ],
        },
      ],
    },
    {
      key: 'pacientes',
      icon: <UsergroupAddOutlined />,
      label: <Link to="/pacientes" className="nav-link">Pacientes</Link>,
    },
    {
      key: 'odontologos',
      icon: <UserOutlined />,
      label: 'Odontólogos',
    },
    {
      key: 'configuracion',
      icon: <SettingOutlined />,
      label: <Link to="/configuracion" className="nav-link">Configuración</Link>,
    },
  ];

  return (
    <div>
      <Logo collapsed={collapsed} />
      <Menu theme='dark' mode="inline" className="menu-bar" onClick={onSelect} items={items} />
    </div>
  );
};

export default MenuList;

