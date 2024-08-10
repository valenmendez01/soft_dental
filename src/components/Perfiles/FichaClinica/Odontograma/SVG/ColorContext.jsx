import { createContext, useState, useContext } from 'react';

// Crear el contexto
const ColorContext = createContext();

// Proveedor del contexto
export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('red');

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useColorContext = () => useContext(ColorContext);
