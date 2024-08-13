import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";
import TextInput from "./TextInput";
import FileUpload from "./FileUpload";

const Recetario = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Recetas</h1>
      </div>
      <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Previsualización de su receta</ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col gap-4">
                <div style={{ width: "100%", height: "600px", marginTop: "20px" }}>
                  <PDFViewer style={{ width: "100%", height: "100%" }}>
                    <PDF />
                  </PDFViewer>
                </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <PDFDownloadLink document={<PDF />} fileName="recetario.pdf">
                  {({ loading }) =>
                    loading ? (
                      <Button color="success" variant="flat" disabled>
                        Cargando documento...
                      </Button>
                    ) : (
                      <Button color="success" variant="flat" onPress={onClose}>
                        Descargar
                      </Button>
                    )
                  }
                </PDFDownloadLink>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ Modal>
      
      <h1 className="mt-2">Dirigirse a Configuración/Recetario para modificar las opciones predeterminadas de la plantilla del odontólogo</h1>
      <TextInput />
      <Button className="mt-7" color="success" variant="flat" onPress={onOpen}>Crear receta</Button>
      <FileUpload />
    </div>
  );
};

export default Recetario;
