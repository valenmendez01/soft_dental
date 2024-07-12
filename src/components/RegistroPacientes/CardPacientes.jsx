
import {Card, CardHeader, CardBody, CardFooter, Divider, Input, ButtonGroup, Button } from "@nextui-org/react";
import ModalForm from './ModalForm'
import Paginacion from './Paginacion'
import { SearchIcon } from "../Header/SearchIcon";
import TableRegistrosPacientes from "./TableRegistrosPacientes/TableRegistrosPacientes";

const CardPacientes = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex align-middle justify-between">
        <div>
          <p className="text-xl m-2">Registro de pacientes</p>
          <div className="mt-4">
            <Input
              label=""
              isClearable
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-black/50 dark:placeholder:text-black/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Buscar paciente..."
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 items-end">
            <ModalForm />
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
        <TableRegistrosPacientes />
      </CardBody>
      <Divider/>
      <CardFooter>
        <Paginacion />
      </CardFooter>
    </Card>
  );
}

export default CardPacientes