import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar_perfil() {
  const { id } = useParams();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <Navbar>
      <NavbarContent className="d-flex justify-content-center space-between">
        <NavbarItem className={activePath === `/pacientes/${id}` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}`} onClick={() => setActivePath(`/pacientes/${id}`)}>
            Historial y evolución
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/ficha` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/ficha`} onClick={() => setActivePath(`/pacientes/${id}/ficha`)}>
            Anamnesis
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/tratamiento` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/tratamiento`} onClick={() => setActivePath(`/pacientes/${id}/tratamiento`)}>
            Odontograma
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/facturacion` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/facturacion`} onClick={() => setActivePath(`/pacientes/${id}/facturacion`)}>
            Periodontograma
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/facturacion` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/facturacion`} onClick={() => setActivePath(`/pacientes/${id}/facturacion`)}>
            Documentación
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/facturacion` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/facturacion`} onClick={() => setActivePath(`/pacientes/${id}/facturacion`)}>
            Recetario
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}