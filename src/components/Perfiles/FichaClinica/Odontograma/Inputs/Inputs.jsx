import { Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Inputs = () => {
  const location = useLocation();
  const [odontogramaValue, setOdontogramaValue] = useState('');

  // Determinar el input odontograma según la URL
  const determineOdontograma = () => {
    if (location.pathname.endsWith('/odontograma')) {
      return 'Catastral';
    } else if (location.pathname.endsWith('/odontogramarealizar')) {
      return 'A realizar';
    } else if (location.pathname.endsWith('/odontogramarealizado')) {
      return 'Realizado';
    } else {
      return 'Error';
    }
  };

  useEffect(() => {
    setOdontogramaValue(determineOdontograma());
  }, [location.pathname]);

  return (
    <div className="container mt-7 mb-3">
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Fecha"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Odontograma"
            labelPlacement="outside"
            isDisabled
            value={odontogramaValue}
          />
        </div>
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Pieza"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Cara"
            labelPlacement="outside"
          />
        </div>
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Prestación"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Descripción"
            labelPlacement="outside"
            isDisabled
          />
        </div>
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Observación"
            labelPlacement="outside"
          />
        </div>
        <Button color="success" variant="flat" className="mt-3">
          Agregar
        </Button>
      </div>
    </div>
  )
}

export default Inputs