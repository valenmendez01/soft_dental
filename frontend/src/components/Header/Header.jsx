import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Input} from "@nextui-org/react";
import { SearchIcon } from './SearchIcon'

// eslint-disable-next-line react/prop-types
const Header = ({ collapsed, setCollapsed }) => {

  return (
    <div style={{ padding: 20 }} className="px-8 flex items-center bg-gradient-to-r from-[#001529] to-[#003f5c] text-white shadow-lg">
      <Button
        type='text'
        className='toggle mr-8'
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{ color: 'white' }}
      />
      <div>
        <Input
          label=""
          isClearable
          radius="lg"
          classNames={{
            label: "text-white/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-white/90 dark:text-white/90",
              "placeholder:text-white/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Buscar paciente..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
    </div>
  );
}

export default Header;
