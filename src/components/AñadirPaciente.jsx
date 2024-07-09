import { useState } from "react"


const AñadirPaciente = () => {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [dni, setDni] = useState(0)

  const mostrarDtos = () =>{
    alert(nombre);
  }

  return (
    <div className="container">
      <div className="column">
        <label>Nombre: 
          <input 
          onChange={(event)=>{
            setNombre(event.target.value);
          }}
          type="text"></input>
        </label> <br/>
        <label>Edad: 
          <input 
          onChange={(event)=>{
            setEdad(event.target.value);
          }}
          type="number"></input>
        </label> <br/>
        <label>DNI: 
          <input 
          onChange={(event)=>{
            setDni(event.target.value);
          }}
          type="number"></input>
        </label>
        <button onClick={mostrarDtos}>Registrar</button>
      </div>
    </div>
  )
}

export default AñadirPaciente