import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {

  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <Navbar>
      <NavbarContent className="d-flex justify-content-center gap-40">
        <NavbarItem className={activePath === "/agenda" ? "activa" : "inactiva"}>
          <Link to="/agenda" onClick={() => setActivePath("/agenda")}>
            Diaria
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === "/agenda/semanal" ? "activa" : "inactiva"}>
          <Link to="/agenda/semanal" onClick={() => setActivePath("/agenda/semanal")}>
            Semanal
          </Link>
        </NavbarItem>
        <NavbarItem className={activePath === "/agenda/mensual" ? "activa" : "inactiva"}>
          <Link to="/agenda/mensual" onClick={() => setActivePath("/agenda/mensual")}>
            Mensual
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

