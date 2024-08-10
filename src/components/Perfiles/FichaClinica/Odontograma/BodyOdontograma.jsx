import NavbarOdontograma from "./Navbars/NavbarOdontograma"
import { CardHeader, Card, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

const BodyOdontograma = () => {
  return (
    <div className="w-full mt-4 px-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Odontograma</h1>
      </div>
      <Card className="container-fluid p-4 mt-7">
        <CardHeader>
          <NavbarOdontograma />
        </CardHeader>
        <Divider/>
        <CardBody className="d-flex justify-content-center align-items-center">
          <Outlet /> {/* renderiza subrutas de Routers */}
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BodyOdontograma