import { useState, useEffect } from "react"
import Axios from "axios"

const AñadirPaciente = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [dni, setDni] = useState(0);

  const [pacientesList, setPacientes] = useState([]);

  const add = () =>{
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      edad:edad, 
      dni:dni
    }).then(()=>{
      getPacientes();
      alert("Paciente registrado");
    });
  }

  const getPacientes = () =>{
    Axios.get("http://localhost:3001/pacientes").then((response)=>{
      setPacientes(response.data);
    });
  }

  useEffect(() => {
    getPacientes();
  }, []);

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          GESTION DE PACIENTES
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre:</span>
            <input type="text" 
            onChange={(event)=>{
              setNombre(event.target.value);
            }}
            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Edad:</span>
            <input type="text" 
            onChange={(event)=>{
              setEdad(event.target.value);
            }}
            className="form-control" placeholder="Ingrese una edad" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">DNI:</span>
            <input type="text" 
            onChange={(event)=>{
              setDni(event.target.value);
            }}
            className="form-control" placeholder="Ingrese DNI" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button className="btn btn-outline-success" onClick={add}>Registrar</button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">DNI</th>
          </tr>
        </thead>
        <tbody>
        {
          pacientesList.map((val,key)=>{
            return  <tr key={val.id}>
                      <th>{val.id}</th>
                      <td>{val.nombre}</td>
                      <td>{val.edad}</td>
                      <td>{val.dni}</td>
                    </tr>
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default AñadirPaciente