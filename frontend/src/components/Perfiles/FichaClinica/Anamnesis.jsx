import { Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const Anamnesis = () => {
  const { id } = useParams();
  // Estados separados para cada input
  const [motivos, setMotivos] = useState('');
  const [newMotivo, setNewMotivo] = useState('');

  const [medicamentos, setMedicamentos] = useState('');
  const [newMedicamento, setNewMedicamento] = useState('');

  const [enfermedades, setEnfermedades] = useState('');
  const [newEnfermedad, setNewEnfermedad] = useState('');

  const [alertas, setAlertas] = useState('');
  const [newAlerta, setNewAlerta] = useState('');

  const [antecedentesOdontologicos, setAntecedentesOdontologicos] = useState('');
  const [newAntecedenteOdontologico, setNewAntecedenteOdontologico] = useState('');

  const [antecedentesFamiliares, setAntecedentesFamiliares] = useState('');
  const [newAntecedenteFamiliar, setNewAntecedenteFamiliar] = useState('');

  const [alergias, setAlergias] = useState('');
  const [newAlergia, setNewAlergia] = useState('');

  const [habitos, setHabitos] = useState('');
  const [newHabito, setNewHabito] = useState('');

  useEffect(() => {
    getAnamnesis();
  }, [id]);

  // Funciones manejadoras genéricas
  const handleAddItem = (setItems, items, newItem, setNewItem) => {
    if (newItem && !items.includes(newItem)) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (setItems, items, itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  // Cargar los datos iniciales
  const getAnamnesis = () => {
    // Verificar si todos los campos están vacíos
    axios.get(`http://localhost:3001/pacientes/${id}/ficha/anamnesis/existe-anamnesis`)
      .then(res => {
        console.log("Respuesta de existe-anamnesis:", res.data);
        if (res.data.existenDatos) { // Si los datos ya existen, actualiza
          axios.get(`http://localhost:3001/pacientes/${id}/ficha/anamnesis`)
            .then(res => {
              console.log("Respuesta de anamnesis:", res.data);
              if (res.data.length > 0) {
                const anamnesisData = res.data[0];
                
                // Parsear las cadenas JSON si es necesario
                const parseJSON = (value) => {
                  try {
                    return JSON.parse(value) || [];
                  } catch {
                    return [];
                  }
                };
                
                setMotivos(parseJSON(anamnesisData.motivo_consulta));
                setMedicamentos(parseJSON(anamnesisData.medicamentos));
                setEnfermedades(parseJSON(anamnesisData.enfermedades));
                setAlertas(parseJSON(anamnesisData.alertas_medicas));
                setAntecedentesOdontologicos(parseJSON(anamnesisData.atc_odont));
                setAntecedentesFamiliares(parseJSON(anamnesisData.atc_familiares));
                setAlergias(parseJSON(anamnesisData.alergias));
                setHabitos(parseJSON(anamnesisData.habitos));
              }
            })
            .catch(err => console.log("Error fetching data:", err));
        } else { // Si los datos no existen, mensaje
          console.log("Todos los campos están vacíos, no se realizará la petición.");
          return;
        }
      })
      .catch(err => console.log("Error verifying data:", err));
  };

  const guardarAnamnesis = () => {
    axios.get(`http://localhost:3001/pacientes/${id}/ficha/anamnesis/existe-anamnesis`)
      .then(res => {
        if (res.data.existenDatos) { // Si los datos ya existen, actualiza
          actualizarAnamnesis();
        } else { // Si los datos no existen, crea nuevos
          crearAnamnesis();
        }
      })
      .catch(err => console.log("Error verifying data:", err));
  };

  const actualizarAnamnesis = () =>{
    axios.put(`http://localhost:3001/pacientes/${id}/ficha/actualizar-anamnesis`, { // envía una solicitud PUT al servidor para actualizar un paciente existente.
      paciente_id: id,
      motivo_consulta: motivos,
      medicamentos: medicamentos, 
      enfermedades: enfermedades, 
      alertas_medicas: alertas, 
      atc_odont: antecedentesOdontologicos, 
      atc_familiares: antecedentesFamiliares, 
      alergias: alergias, 
      habitos: habitos
    }).then(()=>{
      // getAnamnesis();
      Swal.fire({ // muestra una alerta de éxito o error dependiendo del resultado de la solicitud
        title: "<strong>Actualización exitosa</strong>",
        html: "<i>La anamnesis fue actualizada con éxito</i>",
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
  
  const crearAnamnesis = () =>{
    const anamnesis = {
      paciente_id: id,
      motivo_consulta: motivos,
      medicamentos: medicamentos, 
      enfermedades: enfermedades, 
      alertas_medicas: alertas, 
      atc_odont: antecedentesOdontologicos, 
      atc_familiares: antecedentesFamiliares, 
      alergias: alergias, 
      habitos: habitos
    };
    console.log("Anamnesis a añadir:", anamnesis);
    axios.post(`http://localhost:3001/pacientes/${id}/ficha/crear-anamnesis`, anamnesis)
      .then(response => {
        console.log("Anamnesis creada:", response.data);
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response ? error.response.data : "Error al crear la anamnesis"
        });
      });
  }

  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Anamnesis</h1>
        <Button color="success" variant="flat" onClick={guardarAnamnesis}>Guardar cambios</Button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* Motivos */}
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Motivo de consulta"
              labelPlacement="outside"
              value={newMotivo}
              onChange={(e) => setNewMotivo(e.target.value)}
              endContent={
                <button
                  onClick={() => handleAddItem(setMotivos, motivos, newMotivo, setNewMotivo)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(motivos) && motivos.map((motivo, index) => (
                <li key={index}>
                  {motivo}
                  <button className='ml-2' onClick={() => handleRemoveItem(setMotivos, motivos, motivo)}> X</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Medicamentos */}
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Medicamentos"
              labelPlacement="outside"
              value={newMedicamento}
              onChange={(e) => setNewMedicamento(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setMedicamentos, medicamentos, newMedicamento, setNewMedicamento)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(medicamentos) && medicamentos.map((medicamento, index) => (
                <li key={index}>
                  {medicamento}
                  <button className='ml-2' onClick={() => handleRemoveItem(setMedicamentos, medicamentos, medicamento)}> X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Enfermedades y Alertas Médicas */}
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Enfermedades"
              labelPlacement="outside"
              value={newEnfermedad}
              onChange={(e) => setNewEnfermedad(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setEnfermedades, enfermedades, newEnfermedad, setNewEnfermedad)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(enfermedades) && enfermedades.map((enfermedad, index) => (
                <li key={index}>
                  {enfermedad}
                  <button className='ml-2' onClick={() => handleRemoveItem(setEnfermedades, enfermedades, enfermedad)}> X</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Alertas médicas"
              labelPlacement="outside"
              value={newAlerta}
              onChange={(e) => setNewAlerta(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setAlertas, alertas, newAlerta, setNewAlerta)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(alertas) && alertas.map((alerta, index) => (
                <li key={index}>
                  {alerta}
                  <button className='ml-2' onClick={() => handleRemoveItem(setAlertas, alertas, alerta)}> X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Antecedentes Odontológicos y Antecedentes Familiares */}
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Antecedentes odontológicos"
              labelPlacement="outside"
              value={newAntecedenteOdontologico}
              onChange={(e) => setNewAntecedenteOdontologico(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setAntecedentesOdontologicos, antecedentesOdontologicos, newAntecedenteOdontologico, setNewAntecedenteOdontologico)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(antecedentesOdontologicos) && antecedentesOdontologicos.map((antecedente, index) => (
                <li key={index}>
                  {antecedente}
                  <button className='ml-2' onClick={() => handleRemoveItem(setAntecedentesOdontologicos, antecedentesOdontologicos, antecedente)}> X</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Antecedentes familiares"
              labelPlacement="outside"
              value={newAntecedenteFamiliar}
              onChange={(e) => setNewAntecedenteFamiliar(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setAntecedentesFamiliares, antecedentesFamiliares, newAntecedenteFamiliar, setNewAntecedenteFamiliar)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(antecedentesFamiliares) && antecedentesFamiliares.map((antecedente, index) => (
                <li key={index}>
                  {antecedente}
                  <button className='ml-2' onClick={() => handleRemoveItem(setAntecedentesFamiliares, antecedentesFamiliares, antecedente)}> X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Alergias y Hábitos */}
        <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Alergias"
              labelPlacement="outside"
              value={newAlergia}
              onChange={(e) => setNewAlergia(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setAlergias, alergias, newAlergia, setNewAlergia)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(alergias) && alergias.map((alergia, index) => (
                <li key={index}>
                  {alergia}
                  <button className='ml-2' onClick={() => handleRemoveItem(setAlergias, alergias, alergia)}> X</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type='text'
              label="Hábitos"
              labelPlacement="outside"
              value={newHabito}
              onChange={(e) => setNewHabito(e.target.value)}
              endContent={
                <button 
                  onClick={() => handleAddItem(setHabitos, habitos, newHabito, setNewHabito)}
                  size="sm"
                  className='font-bold'
                >
                  Añadir
                </button>
              }
            />
            <ul className='ml-2'>
              {Array.isArray(habitos) && habitos.map((habito, index) => (
                <li key={index}>
                  {habito}
                  <button className='ml-2' onClick={() => handleRemoveItem(setHabitos, habitos, habito)}> X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anamnesis;

