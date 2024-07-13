
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, SelectItem, Select, DatePicker} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { PlusIcon } from "./TableRegistrosPacientes/PlusIcon";

const ModalForm = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const sexos = [
    {key: "masculino", label: "Masculino"},
    {key: "femenino", label: "Femenino"}
  ];

  return (
    <>
      <Button color="success" variant="flat" onPress={onOpen} endContent={<PlusIcon />}>Agregar nuevo paciente</Button>
      <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ingrese los datos del nuevo paciente</ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Input
                        key='inside'
                        type="text"
                        label="Nombre"
                        labelPlacement='inside'
                      />
                      <Input
                        key='inside'
                        type="email"
                        label="Apellido"
                        labelPlacement='inside'
                      />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <DatePicker label="Fecha de nacimiento" />
                      <Select 
                        label="Sexo"  
                      >
                        {sexos.map((sexo) => (
                          <SelectItem key={sexo.key}>
                            {sexo.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Input
                        key='inside'
                        type="number"
                        label="DNI"
                        labelPlacement='inside'
                      />
                      <Input
                        key='inside'
                        type="number"
                        label="Celular"
                        labelPlacement='inside'
                      />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalForm;