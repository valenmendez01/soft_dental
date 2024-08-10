import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";

const Recetario = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Recetas</h1>
        <Button color="success" variant="flat" onPress={onOpen}>Crear receta</Button>
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
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ Modal>
    </div>
  );
};

export default Recetario;
