
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

import TableRegistros from "./TableRegistrosPacientes/TableRegistros"

const CardPacientes = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Card className="flex-1 max-w-full">
        <CardHeader className="flex justify-between mt-2">
          <div>
            <p className="text-xl m-2">Registro de pacientes</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="overflow-auto">
          <TableRegistros />
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardPacientes