// useState y useEffect son hooks de React. 
// useState se utiliza para manejar el estado en componentes funcionales
// useEffect para manejar efectos secundarios en componentes funcionales. Un efecto secundario puede ser cualquier cosa que no sea pura, como llamadas a APIs, suscripciones, o manipulación directa del DOM.
import { useState, useEffect } from "react"
import Axios from "axios" // Axios es una biblioteca para hacer peticiones HTTP.
import Swal from 'sweetalert2' // Swal es una biblioteca para mostrar alertas personalizadas.

const AñadirPaciente = () => {
  // nombre, edad, dni, id: manejan los datos del paciente.
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState();
  const [dni, setDni] = useState();
  const [id, setId] = useState();
  const [estado, setEstado] = useState("");

  // editar: indica si se está editando un paciente.
  const [editar, setEditar] = useState(false);

  // pacientesList: almacena la lista de pacientes.
  const [pacientesList, setPacientes] = useState([]);

  // Función para añadir paciente
  const add = () =>{
    const paciente = {
      nombre: nombre,
      edad: edad,
      dni: dni,
      estado: estado
    };
    console.log("Paciente a añadir:", paciente);
    Axios.post("http://localhost:3001/create", paciente // envía una solicitud POST al servidor para añadir un nuevo paciente.
    ).then(()=>{
      getPacientes(); // se llama para actualizar la lista de pacientes despues de añadir uno
      limpiarCampos(); // limpia los campos del formulario
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud.
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

  // Función para actualizar paciente
  const update = () =>{
    Axios.put("http://localhost:3001/update", { // envía una solicitud PUT al servidor para actualizar un paciente existente.
      id:id,
      nombre:nombre,
      edad:edad, 
      dni:dni,
      estado:estado
    }).then(()=>{
      getPacientes();
      limpiarCampos();
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud
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

  // Función para eliminar paciente
  const deletePaciente = (val) =>{
    Swal.fire({ // muestra una alerta de confirmación antes de eliminar.
      title: "Eliminar paciente",
      html: "<i>Realmente desea eliminar a<strong>"+val.nombre+"</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo"
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`, {}).then(()=>{ // envía una solicitud DELETE al servidor para eliminar un paciente
          getPacientes(); // se llama para actualizar la lista de pacientes después de eliminar.
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
  })}

  // resetea los campos del formulario
  const limpiarCampos = () =>{
    setNombre("");
    setEdad("");
    setDni("");
    setId("");
    setEstado("");
    setEditar(false);
  }

  // prepara los campos para la edición de un paciente
  const editarPaciente = (val)=>{
    setEditar(true);

    setNombre(val.nombre);
    setEdad(val.edad);
    setDni(val.dni);
    setId(val.id);
    setEstado(val.estado);
  }

  // obtiene la lista de pacientes del servidor.
  const getPacientes = () =>{
    Axios.get("http://localhost:3001/pacientes").then((response)=>{
      setPacientes(response.data);
    });
  }

  // se ejecuta una vez al montar el componente para obtener la lista de pacientes.
  useEffect(() => {
    getPacientes();
  }, []);

  return (
    <div className="container_pte">
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
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Estado:</span>
            <input type="text" 
            onChange={(event)=>{
              setEstado(event.target.value);
            }}
            className="form-control" value={estado} placeholder="Ingrese Estado" aria-label="Username" aria-describedby="basic-addon1"/>
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
            <th scope="col">Estado</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
        {
          pacientesList.map((val)=>{
            return  <tr key={val.id}>
                      <th>{val.id}</th>
                      <td>{val.nombre}</td>
                      <td>{val.edad}</td>
                      <td>{val.dni}</td>
                      <td>{val.estado}</td>
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
  )}

export default AñadirPaciente