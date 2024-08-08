/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */

import { createContext, useState, useContext } from 'react';

const PerfilContext = createContext();

export const usePerfil = () => useContext(PerfilContext);

export const PerfilProvider = ({ children }) => {
  const [alertas, setAlertas] = useState([]);
  const [enfermedades, setEnfermedades] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  return (
    <PerfilContext.Provider value={{ alertas, setAlertas, enfermedades, setEnfermedades, medicamentos, setMedicamentos }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const useMedicamentos = () => {
  const { medicamentos, setMedicamentos } = usePerfil();
  return [medicamentos, setMedicamentos];
};

export const useAlertas = () => {
  const { alertas, setAlertas } = usePerfil();
  return [alertas, setAlertas];
};

export const useEnfermedades = () => {
  const { enfermedades, setEnfermedades } = usePerfil();
  return [enfermedades, setEnfermedades];
};