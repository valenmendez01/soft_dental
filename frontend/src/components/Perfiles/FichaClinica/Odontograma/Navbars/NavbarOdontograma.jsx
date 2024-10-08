import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarOdontograma = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <Navbar>
      <NavbarContent className="d-flex justify-content-center space-between">
        <NavbarItem className={activePath === `/pacientes/${id}/ficha/odontograma` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/ficha/odontograma`} onClick={() => setActivePath(`/pacientes/${id}/ficha/odontograma`)}>
            Catastral
          </Link>
        </NavbarItem>
        <NavbarItem 
          className={activePath === (`/pacientes/${id}/ficha/odontograma/odontogramarealizar`) ? "activa" : "inactiva"}
        >
          <Link to={`/pacientes/${id}/ficha/odontograma/odontogramarealizar`} onClick={() => setActivePath(`/pacientes/${id}/ficha/odontograma/odontogramarealizar`)}>
            A realizar
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === `/pacientes/${id}/ficha/odontograma/odontogramarealizado` ? "activa" : "inactiva"}>
          <Link to={`/pacientes/${id}/ficha/odontograma/odontogramarealizado`} onClick={() => setActivePath(`/pacientes/${id}/ficha/odontograma/odontogramarealizado`)}>
            Realizado
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarOdontograma