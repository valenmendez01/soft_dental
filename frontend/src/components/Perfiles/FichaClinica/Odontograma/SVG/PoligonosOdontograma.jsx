import { useState } from "react";
import { useColorContext } from "./ColorContext";

const PoligonosOdontograma = () => {
  const { selectedColor } = useColorContext();

  // Estado para manejar los colores de los segmentos y el círculo
  const [colors, setColors] = useState({
    segment1: 'white',
    segment2: 'white',
    segment3: 'white',
    segment4: 'white',
    circle: 'white',
  });

  // Función para alternar entre el color base y blanco
  const toggleColor = (segment) => {
    setColors((prevColors) => ({
      ...prevColors,
      [segment]: prevColors[segment] === selectedColor ? 'white' : selectedColor
    }));
  };

  return (
    <div style={{ marginLeft: '-13px', marginRight: '-13px' }}>
      <svg height="100" width="100" viewBox="0 0 100 100">
          {/* <!-- Agrupamos los elementos a rotar --> */}
          <g transform="rotate(45, 50, 50)">
              {/* <!-- Segmento superior izquierdo --> */}
              <path d="M 50 50 L 50 25 A 25 25 0 0 0 25 50 Z" fill={colors.segment1} stroke="black" onClick={() => toggleColor('segment1')} className="cursor-pointer" />
              {/* <!-- Segmento superior derecho --> */}
              <path d="M 50 50 L 75 50 A 25 25 0 0 0 50 25 Z" fill={colors.segment2} stroke="black" onClick={() => toggleColor('segment2')} className="cursor-pointer" />
              {/* <!-- Segmento inferior derecho --> */}
              <path d="M 50 50 L 50 75 A 25 25 0 0 0 75 50 Z" fill={colors.segment3} stroke="black" onClick={() => toggleColor('segment3')} className="cursor-pointer" />
              {/* <!-- Segmento inferior izquierdo --> */}
              <path d="M 50 50 L 25 50 A 25 25 0 0 0 50 75 Z" fill={colors.segment4} stroke="black" onClick={() => toggleColor('segment4')} className="cursor-pointer" />
              {/* <!-- Vertical Line (part of the cross) --> */}
              <line x1="50" y1="25" x2="50" y2="75" stroke="black"/>
              {/* <!-- Horizontal Line (part of the cross) --> */}
              <line x1="25" y1="50" x2="75" y2="50" stroke="black"/>
          </g>
          {/* <!-- Círculo central --> */}
          <circle cx="50" cy="50" r="12" fill={colors.circle} stroke="black" onClick={() => toggleColor('circle')} className="cursor-pointer" />
      </svg>
    </div>
  )
}

export default PoligonosOdontograma