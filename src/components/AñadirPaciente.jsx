import { useState } from "react"
import Axios from "axios"

const AñadirPaciente = () => {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [dni, setDni] = useState(0)

  const add = () =>{
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      edad:edad, 
      dni:dni
    }).then(()=>{
      alert("Paciente registrado");
    });
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
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  )
}

export default AñadirPaciente