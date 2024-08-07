
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Navbar_agenda from "../Navbar_agenda"
import { Outlet } from 'react-router-dom';

const CardAgenda = () => {
  return (
    <div className='container-fluid p-5 vh-100'>
      <Card className="max-w-[100%]">
        <CardHeader>
          <Navbar_agenda />
        </CardHeader>
        <Divider/>
        <CardBody>
          <Outlet /> {/* renderiza subrutas de Routers */}
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardAgenda