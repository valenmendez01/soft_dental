import { Button } from 'antd';
import { auth } from '../credenciales';
import { signOut } from 'firebase/auth';

const Configuracion = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successful");
        // Puedes redirigir o hacer otras acciones después del cierre de sesión si es necesario
      })
      .catch((error) => {
        console.error("Error during sign out:", error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      });
  };

  return (
    <div>
      Contenido de Configuración
      <Button onClick={handleSignOut} style={{ marginLeft: '10px' }}>Cerrar Sesión</Button>
    </div>
  )
}

export default Configuracion