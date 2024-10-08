import { Avatar, AvatarIcon } from "@nextui-org/react";
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
      <div>
        <div className="flex gap-4 ml-3">
          <Avatar isBordered radius="full" icon={<AvatarIcon />} 
            classNames={{
            base: "w-20 h-20 text-large bg-gradient-to-br from-[#001529] to-[#003f5c]",
            icon: "text-white/80",
            }}/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="fs-3 font-bold leading-none text-gray-800 dark:text-gray-100">{patient.nombre} {patient.apellido}</h4>
            <h5 className="fs-6 text-gray-600 dark:text-gray-400">ID: {patient.id}</h5>
          </div>
        </div>
      </div>
    );
};
export default Header_perfil;