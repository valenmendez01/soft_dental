import { Routes, Route, Navigate } from "react-router-dom"
import Pacientes from "../../pages/Pacientes"
import Configuracion from "../../pages/Configuracion"
import Perfil from "../Perfiles/Perfil"
import DatosPersonales from "../Perfiles/DatosPersonales/DatosPersonales"
import PlanDeTratamiento from "../Perfiles/Tratamiento/PlanDeTratamiento"
import FacturasPagos from "../Perfiles/Pagos/FacturasPagos"
import CardAgenda from "../Agenda/Calendars/CardAgenda"
import CalendarWeekDaily from "../Agenda/Calendars/PRUEBA/WeekView/CalendarWeekDaily"
import CalendarMensual from "../Agenda/Calendars/PRUEBA/CalendarMensual"
import CalendarDiario from "../Agenda/Calendars/PRUEBA/aside/CalendarDiario"
import FichaClinica from "../Perfiles/FichaClinica/FichaClinica"
import HistorialEvolucion from "../Perfiles/FichaClinica/HistorialEvolucion"
import Anamnesis from "../Perfiles/FichaClinica/Anamnesis"
import Periodontograma from "../Perfiles/FichaClinica/Periodontograma"
import Documentacion from "../Perfiles/FichaClinica/Documentacion"
import Recetario from "../Perfiles/FichaClinica/Recetario/Recetario"
import NavbarOdontograma from "../Perfiles/FichaClinica/Odontograma/BodyOdontograma"
import Realizado from "../Perfiles/FichaClinica/Odontograma/Navbars/Realizado"
import Realizar from "../Perfiles/FichaClinica/Odontograma/Navbars/Realizar"
import Catastral from "../Perfiles/FichaClinica/Odontograma/Navbars/Catastral"

const Routers = () => {
  return <Routes>
    <Route path='/login' element={<Navigate to="/agenda" />}/>
    <Route path='/agenda' element={<CardAgenda />}>
      <Route index element={<CalendarDiario />} />
      <Route path="semanal" element={<CalendarWeekDaily />} />
      <Route path="mensual" element={<CalendarMensual />} />
    </Route>

    <Route path="/pacientes" element={<Pacientes />} />
    <Route path="/pacientes/:id" element={<Perfil />}>
      <Route index element={<DatosPersonales />} />
      <Route path="tratamiento" element={<PlanDeTratamiento />} />
      <Route path="facturacion" element={<FacturasPagos />} />
      <Route path="ficha" element={<FichaClinica />}>
        <Route index element={<HistorialEvolucion />} />
        <Route path="anamnesis" element={<Anamnesis />} />
        <Route path="odontograma" element={<NavbarOdontograma />}>
          <Route index element={<Catastral />} />
          <Route path="odontogramarealizado" element={<Realizado />} />
          <Route path="odontogramarealizar" element={<Realizar />} />
        </Route>
        <Route path="periodontograma" element={<Periodontograma />} />
        <Route path="documentacion" element={<Documentacion />} />
        <Route path="recetario" element={<Recetario />} />
      </Route>
    </Route>

    <Route path="/configuracion" element={<Configuracion />} />
    <Route path='/' element={<Navigate to="/agenda" />}/>
    <Route path="*" element={<Navigate to="/agenda" />} />
  </Routes>
}

export default Routers