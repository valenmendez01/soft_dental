import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header_perfil = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
  
    useEffect(() => {
      axios.get(`http://localhost:3001/pacientes/${id}`).then((response) => {
        setPatient(response.data);
      });
    }, [id]);
  
    if (!patient) return <div>Cargando...</div>;

    return (
      <div className="mt-5 mb-2 container px-6 mx-auto flex flex-col items-start justify-between pb-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">{patient.nombre} {patient.apellido}</h1>
        <ul className="flex flex-col items-start text-gray-600 dark:text-gray-400 text-sm mt-3">
          <li className="flex items-center mr-4">
            <span>ID: {patient.id}</span>
          </li>
        </ul>
      </div>
    );
};
export default Header_perfil;