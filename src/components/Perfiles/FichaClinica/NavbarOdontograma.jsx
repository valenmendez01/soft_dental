

import { Switch, Navbar, NavbarContent, NavbarItem, CardHeader, Card, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarOdontograma = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div className="container ml-3 mt-4">
      <div className="d-flex align-items-center justify-between">
        <h1 className="fs-4">Odontograma</h1>
        <Switch defaultSelected>
          Odontograma adulto
        </Switch> 
      </div>
      <Card className="max-w-[100%] mt-7">
        <CardHeader>
          <Navbar>
            <NavbarContent className="d-flex justify-content-center space-between">
              <NavbarItem className={activePath === `/pacientes/${id}/ficha/odontograma` ? "activa" : "inactiva"}>
                <Link to={`/pacientes/${id}/ficha/odontograma`} onClick={() => setActivePath(`/pacientes/${id}/ficha/odontograma`)}>
                  Catastral
                </Link>
              </NavbarItem>
              <NavbarItem 
                className={activePath.startsWith(`/pacientes/${id}/ficha/odontograma/odontogramarealizar`) ? "activa" : "inactiva"}
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
        </CardHeader>
        <Divider/>
        <CardBody>
          <Outlet /> {/* renderiza subrutas de Routers */}
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NavbarOdontograma