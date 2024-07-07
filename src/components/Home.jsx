import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

// eslint-disable-next-line react/prop-types
const Home = ({ correoUsuario }) => {
  return (
    <div>
      <h2>Bienvenido {correoUsuario}<button onClick={() => signOut(auth)}>Log Out</button></h2>
    </div>
  );
};


export default Home