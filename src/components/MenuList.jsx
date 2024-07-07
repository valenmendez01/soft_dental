
import PropTypes from 'prop-types';
import { Menu } from "antd";
import { HomeOutlined, CalendarOutlined, BarsOutlined, UsergroupAddOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const MenuList = () => {
  return (
    <Menu theme='dark' mode="inline" className="menu-bar"> 
      <Menu.Item key="inicio" icon={<HomeOutlined />}>
        Inicio
      </Menu.Item>
      <Menu.Item key="agenda" icon={<CalendarOutlined />}>
        Agenda
      </Menu.Item>
      <Menu.SubMenu key="tareas" icon={<BarsOutlined />} title="Tareas">
        <Menu.Item key="Tarea-1">Tarea 1</Menu.Item>
        <Menu.Item key="Tarea-2">Tarea 2</Menu.Item>
        <Menu.SubMenu key="subtarea" title="Subtarea">
          <Menu.Item key="Subtarea-1">Subtarea 1</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="pacientes" icon={<UsergroupAddOutlined />}>
        Pacientes
      </Menu.Item>
      <Menu.Item key="odontólogos" icon={<UserOutlined />}>
        Odontólogos
      </Menu.Item>
      <Menu.Item key="configuracion" icon={<SettingOutlined />}>
        Configuración
      </Menu.Item>
    </Menu>
  );
};

MenuList.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default MenuList;
