
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Navbar_agenda from "../Navbar_agenda"
import { Outlet } from 'react-router-dom';

const CardAgenda = () => {
  return (
    <div className='flex flex-col min-h-screen p-5'>
      <Card className="flex-1 max-w-full">
        <CardHeader>
          <Navbar_agenda />
        </CardHeader>
        <Divider/>
        <CardBody className="overflow-auto">
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