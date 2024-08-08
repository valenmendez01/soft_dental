import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FichaClinica() {
  const { id } = useParams();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div>
      <Navbar>
        <NavbarContent className="d-flex justify-content-center space-between">
          <NavbarItem className={activePath === `/pacientes/${id}/ficha` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha`} onClick={() => setActivePath(`/pacientes/${id}/ficha`)}>
              Historial y evolución
            </Link>
          </NavbarItem>
          <NavbarItem className={activePath === `/pacientes/${id}/ficha/anamnesis` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha/anamnesis`} onClick={() => setActivePath(`/pacientes/${id}/ficha/anamnesis`)}>
              Anamnesis
            </Link>
          </NavbarItem>
          <NavbarItem className={activePath === `/pacientes/${id}/ficha/odontograma` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha/odontograma`} onClick={() => setActivePath(`/pacientes/${id}/ficha/odontograma`)}>
              Odontograma
            </Link>
          </NavbarItem>
          <NavbarItem className={activePath === `/pacientes/${id}/ficha/periodontograma` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha/periodontograma`} onClick={() => setActivePath(`/pacientes/${id}/ficha/periodontograma`)}>
              Periodontograma
            </Link>
          </NavbarItem>
          <NavbarItem className={activePath === `/pacientes/${id}/ficha/documentacion` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha/documentacion`} onClick={() => setActivePath(`/pacientes/${id}/ficha/documentacion`)}>
              Documentación
            </Link>
          </NavbarItem>
          <NavbarItem className={activePath === `/pacientes/${id}/ficha/recetario` ? "activa" : "inactiva"}>
            <Link to={`/pacientes/${id}/ficha/recetario`} onClick={() => setActivePath(`/pacientes/${id}/ficha/recetario`)}>
              Recetario
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* Aquí es donde los componentes hijos (subrutas) serán renderizados */}
      <Outlet />
    </div>
  );
}