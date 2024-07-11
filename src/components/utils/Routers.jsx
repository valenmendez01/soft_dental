import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../../pages/Home"
import Pacientes from "../../pages/Pacientes"
import Agenda from "../../pages/Agenda"
import Configuracion from "../../pages/Configuracion"

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/login' element={<Navigate to="/home" />}/>
    <Route path="/pacientes" element={<Pacientes />} />
    <Route path="/agenda" element={<Agenda />} />
    <Route path="/configuracion" element={<Configuracion />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
}

export default Routers