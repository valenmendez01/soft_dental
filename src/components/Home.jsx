import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import { Layout } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';

const auth = getAuth(appFirebase)
const { Header, Sider } = Layout
// eslint-disable-next-line react/prop-types
const Home = ({ correoUsuario }) => {

  return (
    <div>
      <h2>Bienvenido {correoUsuario}<button onClick={() => signOut(auth)}>Log Out</button></h2>
      <Layout>
        <Sider theme='dark' className='sidebar'>
          <Logo/>
          <MenuList />
        </Sider>
      </Layout>
    </div>
  );
};


export default Home