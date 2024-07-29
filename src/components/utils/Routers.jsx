import { Routes, Route, Navigate } from "react-router-dom"
import Pacientes from "../../pages/Pacientes"
import Agenda from "../../pages/Agenda"
import Configuracion from "../../pages/Configuracion"

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Agenda />}/>
    <Route path='/agenda' element={<Agenda />}/>
    <Route path='/login' element={<Navigate to="/agenda" />}/>
    <Route path="/pacientes" element={<Pacientes />} />
    <Route path="/configuracion" element={<Configuracion />} />
    <Route path="*" element={<Navigate to="/agenda" />} />
    <Route path="/agenda/semanal" element={<Agenda />} />
    <Route path="/agenda/mensual" element={<Agenda />} />
    <Route path="/agenda/prueba" element={<Agenda />} />
  </Routes>
}

export default Routers