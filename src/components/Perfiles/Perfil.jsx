
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
    <div className='flex flex-col min-h-screen p-5'>
      <Card className="flex-1 max-w-full">
        <CardHeader className="justify-between">
          <Header_perfil />
          <MiniCardAtencion />
        </CardHeader>
        <Divider/>
        <CardBody className="overflow-auto">
          <Navbar_perfil />
          <Outlet /> {/* renderiza subrutas de Routers */}
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Perfil;

