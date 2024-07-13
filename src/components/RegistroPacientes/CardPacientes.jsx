
import {Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button } from "@nextui-org/react";

import TableRegistros from "./TableRegistrosPacientes/TableRegistros"

const CardPacientes = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex align-middle justify-between">
        <div>
          <p className="text-xl m-2">Registro de pacientes</p>
        </div>
        <div className="flex flex-col mt-4 items-end">
            <ButtonGroup className="mt-4">
              <Button variant="flat" isIconOnly size="sm">A</Button>
              <Button variant="flat" isIconOnly size="sm">B</Button>
              <Button variant="flat" isIconOnly size="sm">C</Button>
              <Button variant="flat" isIconOnly size="sm">D</Button>
              <Button variant="flat" isIconOnly size="sm">F</Button>
              <Button variant="flat" isIconOnly size="sm">G</Button>
              <Button variant="flat" isIconOnly size="sm">H</Button>
              <Button variant="flat" isIconOnly size="sm">I</Button>
              <Button variant="flat" isIconOnly size="sm">J</Button>
              <Button variant="flat" isIconOnly size="sm">K</Button>
              <Button variant="flat" isIconOnly size="sm">L</Button>
              <Button variant="flat" isIconOnly size="sm">M</Button>
              <Button variant="flat" isIconOnly size="sm">N</Button>
              <Button variant="flat" isIconOnly size="sm">Ñ</Button>
              <Button variant="flat" isIconOnly size="sm">O</Button>
              <Button variant="flat" isIconOnly size="sm">P</Button>
              <Button variant="flat" isIconOnly size="sm">Q</Button>
              <Button variant="flat" isIconOnly size="sm">R</Button>
              <Button variant="flat" isIconOnly size="sm">S</Button>
              <Button variant="flat" isIconOnly size="sm">T</Button>
              <Button variant="flat" isIconOnly size="sm">U</Button>
              <Button variant="flat" isIconOnly size="sm">V</Button>
              <Button variant="flat" isIconOnly size="sm">W</Button>
              <Button variant="flat" isIconOnly size="sm">X</Button>
              <Button variant="flat" isIconOnly size="sm">Y</Button>
              <Button variant="flat" isIconOnly size="sm">Z</Button>
            </ButtonGroup>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <TableRegistros />
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default CardPacientes