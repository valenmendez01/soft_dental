import { useState, useEffect } from "react"
import Axios from "axios"
import Swal from 'sweetalert2'

const AñadirPaciente = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState();
  const [dni, setDni] = useState();
  const [id, setId] = useState();

  const [editar, setEditar] = useState(false);

  const [pacientesList, setPacientes] = useState([]);

  const add = () =>{
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      edad:edad, 
      dni:dni
    }).then(()=>{
      getPacientes();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro exitoso</strong>",
        text: "<i>El paciente <strong>"+nombre+"</strong> fue registrado con éxito</i>",
        icon: "success",
        timer:3000
      });
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(JSON.stringify(error)).message
      });
    });
  }

  const update = () =>{
    Axios.put("http://localhost:3001/update", {
      id:id,
      nombre:nombre,
      edad:edad, 
      dni:dni
    }).then(()=>{
      getPacientes();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa</strong>",
        text: "<i>El paciente <strong>"+nombre+"</strong> fue actualizado con éxito</i>",
        icon: "success",
        timer:3000
      });
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(JSON.stringify(error)).message
      });
    });
  }

  const deletePaciente = (val) =>{
    Swal.fire({
      title: "Eliminar paciente",
      html: "<i>Realmente desea eliminar a<strong>"+val.nombre+"</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo"
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`, {}).then(()=>{
          getPacientes();
          limpiarCampos();
          Swal.fire({
            title:"Eliminado!",
            html:val.nombre+ "fue eliminado",
            icon:"success",
            timer:3000
          });
      }).catch(function(error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logró eliminar el empleado",
          footer: JSON.parse(JSON.stringify(error)).message
        });
      });
  }
  });

  const limpiarCampos = () =>{
    setNombre("");
    setEdad("");
    setDni("");
    setId("");
    setEditar(false);
  }

  const editarPaciente = (val)=>{
    setEditar(true);

    setNombre(val.nombre);
    setEdad(val.edad);
    setDni(val.dni);
    setId(val.id);
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
            className="form-control" value={nombre} placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Edad:</span>
            <input type="text" 
            onChange={(event)=>{
              setEdad(event.target.value);
            }}
            className="form-control" value={edad} placeholder="Ingrese una edad" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">DNI:</span>
            <input type="text" 
            onChange={(event)=>{
              setDni(event.target.value);
            }}
            className="form-control" value={dni} placeholder="Ingrese DNI" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {
            editar? 
            <div>
              <button className="btn btn-warning m-2" onClick={update}>Actualizar</button>
              <button className="btn btn-info m-2" onClick={limpiarCampos}>Cancelar</button> 
            </div>
            : <button className="btn btn-outline-success" onClick={add}>Registrar</button>
          }
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">DNI</th>
            <th scope="col">ACCIONES</th>
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
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button"
                          onClick={()=>{
                            editarPaciente(val);
                          }}
                          className="btn btn-info">Editar</button>
                          <button type="button"
                          onClick={()=>{
                            deletePaciente(val)
                          }}
                          className="btn btn-danger">Eliminar</button>
                        </div>
                      </td>
                    </tr>
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default AñadirPaciente