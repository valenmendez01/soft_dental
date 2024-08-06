
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Perfil = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/pacientes/${id}`).then((response) => {
      setPatient(response.data);
    });
  }, [id]);

  if (!patient) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{patient.nombre} {patient.apellido}</h1>
      <p><strong>DNI:</strong> {patient.dni}</p>
      <p><strong>Fecha de nacimiento:</strong> {patient.nacimiento}</p>
      <p><strong>Sexo:</strong> {patient.sexo}</p>
      <p><strong>Celular:</strong> {patient.celular}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default Perfil;
