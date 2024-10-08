import CardCuenta from "../components/configuracion/CardCuenta"
import CardRecetario from "../components/configuracion/CardRecetario"


const Configuracion = () => {
  
  return (
    <div className='flex flex-col min-h-screen p-5'>
      <CardCuenta />
      <CardRecetario />
    </div>
  )
}

export default Configuracion