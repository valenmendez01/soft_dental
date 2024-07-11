import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { theme } from 'antd';

// eslint-disable-next-line react/prop-types
const Header = ({ collapsed, setCollapsed }) => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <div style={{ padding: 0, backgroundColor: colorBgContainer }}>
      <Button
        type='text'
        className='toggle'
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </div>
  );
}

export default Header;
