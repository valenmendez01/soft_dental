import { Button, DatePicker, Input, Select, SelectItem, Tooltip } from "@nextui-org/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { EditIcon } from "../../RegistroPacientes/TableRegistrosPacientes/EditIcon";

const DatosPersonales = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");

  const [fecha, setFecha] = useState(null);
  const [sexo, setSexo] = useState("");
  const [celular, setCelular] = useState(null);
  const [direccion, setDireccion] = useState("");
  const [cp, setCp] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [civil, setCivil] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [email, setEmail] = useState("");
  const [obrasocial, setObrasocial] = useState("");
  const [numeroOs, setNumeroOs] = useState(null);

  const [isDisabled, setIsDisabled] = useState(true);

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

  // Cargar los datos iniciales
  const getPacientes = () =>{
    axios.get(`http://localhost:3001/pacientes/${id}`)
      .then(res => {
        // setData(res.data);
        setNombre(res.data.nombre || "");
        setApellido(res.data.apellido || "");
        setDni(res.data.dni || "");
        console.log("Datos cargados:", res.data);
      })
      .catch(err => console.log("Error fetching data:", err));
  }
  // Cargar los datos iniciales
  const getDatosPersonales = () =>{
    axios.get(`http://localhost:3001/pacientes/${id}/datos-personales`)
      .then(res => {
        // setData(res.data);
        setFecha(res.data[0].fecha || null);
        setSexo(res.data[0].sexo || "");
        setCelular(res.data[0].celular || null);
        setDireccion(res.data[0].direccion || "");
        setCp(res.data[0].cp || "");
        setLocalidad(res.data[0].localidad || "");
        setCivil(res.data[0].civil || "");
        setOcupacion(res.data[0].ocupacion || "");
        setEmail(res.data[0].email || "");
        setObrasocial(res.data[0].obrasocial || "");
        setNumeroOs(res.data[0].numeroOs || null);
        console.log("Datos cargados:", res.data);
      })
      .catch(err => console.log("Error fetching data:", err));
  }

  const update = () =>{
    axios.put(`http://localhost:3001/pacientes/${id}/update`, { // envía una solicitud PUT al servidor para actualizar un paciente existente.
      nombre:nombre,
      apellido:apellido, 
      dni:dni,
    }).then(()=>{
      getPacientes();
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud
        title: "<strong>Actualización exitosa</strong>",
        html: "<i>El paciente <strong>"+nombre+"</strong> fue actualizado con éxito</i>",
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

  const actualizarDatosPersonales = () =>{
    axios.put(`http://localhost:3001/pacientes/${id}/actualizar-datos-personales`, { // envía una solicitud PUT al servidor para actualizar un paciente existente.
      paciente_id: id,
      fecha: fecha,
      sexo: sexo,
      celular: celular,
      direccion: direccion,
      cp: cp,
      localidad: localidad,
      civil: civil,
      ocupacion: ocupacion,
      email: email,
      obrasocial: obrasocial,
      numeroOs: numeroOs
    }).then(()=>{
      getDatosPersonales();
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud
        title: "<strong>Actualización exitosa</strong>",
        html: "<i>El paciente <strong>"+nombre+"</strong> fue actualizado con éxito</i>",
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
  
  const crear = () =>{
    const paciente = {
      paciente_id: id,
      fecha: fecha,
      sexo: sexo,
      celular: celular,
      direccion: direccion,
      cp: cp,
      localidad: localidad,
      civil: civil,
      ocupacion: ocupacion,
      email: email,
      obrasocial: obrasocial,
      numeroOs: numeroOs
    };
    console.log("Paciente a añadir:", paciente);
    axios.post(`http://localhost:3001/pacientes/${id}/crear`, paciente)
      .then(response => {
        console.log("Paciente creado:", response.data);
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response ? error.response.data : "Error al crear el paciente"
        });
      });
  }

  // se ejecuta una vez al montar el componente para obtener la lista de pacientes.
  useEffect(() => {
    getPacientes();
    getDatosPersonales();

    // Verifica si todos los campos están vacíos
    const todosCamposVacios =
      !fecha &&
      !sexo &&
      !celular &&
      !direccion &&
      !cp &&
      !localidad &&
      !civil &&
      !ocupacion &&
      !email &&
      !obrasocial &&
      !numeroOs;
    // Deshabilita el botón si todos los campos están vacíos
    setIsDisabled(todosCamposVacios);
  }, [id, fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numeroOs]);

  const handleClickupdate = () => {
    if (fecha || sexo || celular || direccion || cp || localidad || civil || ocupacion || email || obrasocial || numeroOs) {
      actualizarDatosPersonales(); // Si estos campos están llenos, asume que los datos existen y actualiza
    } else {
      crear(); // Si alguno de estos campos falta, asume que es una nueva entrada y crea
    }
    if (nombre && apellido && dni) {
      update();
  };
  }
  
  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Datos personales</h1>
        <div className="relative flex items-center gap-2">
          <Button color="success" variant="flat" isDisabled={isDisabled}>
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Button>
          <Button color="success" variant="flat" onClick={handleClickupdate}>Guardar cambios</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Nombre"
            labelPlacement="outside"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <Input
            type="text"
            label="Apellido"
            labelPlacement="outside"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <DatePicker 
            label="Fecha de nacimiento"
            labelPlacement="outside" 
            dateFormat="yyyy-MM-dd"
            id="fecha"
            value={fecha}
            onChange={(date) => setFecha(date)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
              label="Sexo"
              labelPlacement="outside"
              selectedKeys={[sexo]}
              onChange={(e) => setSexo(e.target.value)}
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
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
          <Input
            type="number"
            label="Celular"
            labelPlacement="outside"
            id="celular"
            value={celular || ''}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Dirección particular"
            labelPlacement="outside"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <Input
            type="number"
            label="Código postal"
            labelPlacement="outside"
            id="cp"
            value={cp}
            onChange={(e) => setCp(e.target.value)}
          />
          <Input
            type="text"
            label="Localidad"
            labelPlacement="outside"
            id="localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            label="Estado civil"
            labelPlacement="outside"
            selectedKeys={[civil]}
            onChange={(e) => setCivil(e.target.value)}
          >
            {estCivil.map((item) => (
              <SelectItem key={item.key} value={item.key}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="Ocupación"
            labelPlacement="outside"
            id="ocupacion"
            value={ocupacion}
            onChange={(e) => setOcupacion(e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Obra social o prepaga"
            labelPlacement="outside"
            id="obrasocial"
            value={obrasocial}
            onChange={(e) => setObrasocial(e.target.value)}
          />
          <Input
            type="number"
            label="Número"
            labelPlacement="outside"
            id="numero_os"
            value={numeroOs || ''}
            onChange={(e) => setNumeroOs(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default DatosPersonales;