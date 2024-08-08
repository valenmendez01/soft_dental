import { Button, DatePicker, Input, Select, SelectItem } from "@nextui-org/react"

const DatosPersonales = () => {
  const sexos = [
    {key: "masculino", label: "Masculino"},
    {key: "femenino", label: "Femenino"}
  ];
  const estCivil = [
    {key: "soltero", label: "Soltero/a"},
    {key: "casado", label: "Casado/a"},
    {key: "separado", label: "Separado/a"},
    {key: "viudo", label: "Viudo/a"}
  ];
  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Datos personales</h1>
        <Button color="success" variant="flat">Guardar cambios</Button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Nombre"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Apellido"
            labelPlacement="outside"
          />
          <DatePicker 
            label="Fecha de nacimiento"
            labelPlacement="outside" 
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            label="Sexo"
            labelPlacement="outside"
          >
            {sexos.map((sexo) => (
              <SelectItem key={sexo.key}>
                {sexo.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="number"
            label="DNI"
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="Celular"
            labelPlacement="outside"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Dirección particular"
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="Código postal"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Localidad"
            labelPlacement="outside"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            label="Estado civil"
            labelPlacement="outside"
          >
            {estCivil.map((estadoCivil) => (
              <SelectItem key={estadoCivil.key}>
                {estadoCivil.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="Ocupación"
            labelPlacement="outside"
          />
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Obra social o prepaga"
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="Número"
            labelPlacement="outside"
          />
        </div>
      </div>
    </div>
  )
}

export default DatosPersonales