
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { PlusIcon } from "./TableRegistrosPacientes/PlusIcon";
import { useState } from "react"
import Axios from "axios" // Axios es una biblioteca para hacer peticiones HTTP.
import Swal from 'sweetalert2' // Swal es una biblioteca para mostrar alertas personalizadas.

const ModalForm = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState();

  const add = () =>{
    
    const paciente = {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
    };
    console.log("Paciente a añadir:", paciente);
    Axios.post("http://localhost:3001/pacientes/create", paciente // envía una solicitud POST al servidor para añadir un nuevo paciente.
    ).then(()=>{
      //getPacientes(); // se llama para actualizar la lista de pacientes despues de añadir uno
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud.
        title: "<strong>Registro exitoso</strong>",
        html: "<i>El paciente <strong>"+nombre+"</strong> fue registrado con éxito</i>",
        icon: "success",
        timer:3000
      });
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(JSON.stringify(error)).message
      });
    });
  }

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
                        key='nombre'
                        type="text"
                        label="Nombre"
                        labelPlacement='inside'
                        onChange={(event)=>{
                          setNombre(event.target.value);
                        }}
                      />
                      <Input
                        key='apellido'
                        type="text"
                        label="Apellido"
                        labelPlacement='inside'
                        onChange={(event)=>{
                          setApellido(event.target.value);
                        }}
                      />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Input
                        key='dni'
                        type="number"
                        label="DNI"
                        labelPlacement='inside'
                        onChange={(event)=>{
                          setDni(event.target.value);
                        }}
                      />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose} onClick={add}>
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