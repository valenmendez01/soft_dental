
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

import TableRegistros from "./TableRegistrosPacientes/TableRegistros"
import AñadirPaciente from "./AñadirPaciente";

const CardPacientes = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex justify-between mt-2">
        <div>
          <p className="text-xl m-2">Registro de pacientes</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <TableRegistros />
        <AñadirPaciente />
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default CardPacientes