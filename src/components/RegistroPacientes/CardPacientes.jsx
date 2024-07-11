
import {Card, CardHeader, CardBody, CardFooter, Divider, Input } from "@nextui-org/react";
import ModalForm from './ModalForm'
import Paginacion from './Paginacion'
import { SearchIcon } from "../Header/SearchIcon";
import TableRegistrosPacientes from "./TableRegistrosPacientes/TableRegistrosPacientes";

const CardPacientes = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex align-middle justify-between">
        <div className="">
          <p className="text-xl m-2">Registro de pacientes</p>
          <div className="mt-3">
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
          <ModalForm />
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