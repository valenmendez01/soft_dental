import { Button } from "@nextui-org/react"

const Recetario = () => {
  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Recetas</h1>
        <Button color="success" variant="flat">Crear receta</Button>
      </div>
    </div>
  )
}

export default Recetario