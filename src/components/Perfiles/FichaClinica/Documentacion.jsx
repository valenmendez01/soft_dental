import { Button } from "@nextui-org/react"

const Documentacion = () => {
  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Documentos</h1>
        <Button color="success" variant="flat">Subir archivo</Button>
      </div>
    </div>
  )
}

export default Documentacion