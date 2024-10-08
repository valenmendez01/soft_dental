import { CardHeader, Card, Divider, CardBody, CardFooter, Button } from "@nextui-org/react";
import { auth } from '../../credenciales';
import { signOut } from 'firebase/auth';

const CardCuenta = () => {

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
      <Card className="flex-1 max-w-full">
        <CardHeader className="flex justify-between mt-2">
          <div>
            <p className="text-2xl m-2">Cuenta</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="overflow-auto d-flex justify-content-center align-items-left">
          <div>
            <Button onClick={handleSignOut} style={{ marginLeft: '10px' }} color="danger" variant="flat">Cerrar Sesión</Button>
          </div>
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
  )
}

export default CardCuenta;