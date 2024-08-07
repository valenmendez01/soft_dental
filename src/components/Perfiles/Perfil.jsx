
import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Navbar_perfil from "./Navbar_perfil"
import Header_perfil from './Header_perfil';
import MiniCardAtencion from './MiniCardAtencion';

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
    <div className='container-fluid p-5 vh-100'>
      <Card className="max-w-[100%]">
        <CardHeader className="justify-between">
          <Header_perfil />
          <MiniCardAtencion />
        </CardHeader>
        <Divider/>
        <CardBody>
          <Navbar_perfil />
          <Outlet /> {/* renderiza subrutas de Routers */}
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
    // <div>
    //   <h1>{patient.nombre} {patient.apellido}</h1>
    //   <p><strong>DNI:</strong> {patient.dni}</p>
    //   <p><strong>Fecha de nacimiento:</strong> {patient.nacimiento}</p>
    //   <p><strong>Sexo:</strong> {patient.sexo}</p>
    //   <p><strong>Celular:</strong> {patient.celular}</p>
    //   {/* Agrega más detalles según sea necesario */}
    // </div>
  );
};

export default Perfil;

