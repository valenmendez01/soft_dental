/* eslint-disable react/prop-types */
import React from "react";
import Day from "./Day"; // Este componente se utilizará para renderizar cada día en el mes.

// El componente Month renderiza una cuadrícula de días utilizando Tailwind CSS para el diseño. La prop month se espera que sea una matriz 2D, donde cada submatriz representa una semana y cada elemento dentro de las submatrices representa un día. La cuadrícula tiene 7 columnas y 5 filas
export default function Month({ month }) { // month se espera sea una matriz de matrices (una matriz 2D) que representa las semanas y los días del mes.
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    // grid para definir una cuadrícula con 7 columnas (grid-cols-7) y 5 filas (grid-rows-5)
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {/* Fila de los días de la semana */}
      {daysOfWeek.map((day, idx) => (
        <div key={idx} className="flex justify-center items-center border">
          <p className="text-sm mt-1">{day}</p>
        </div>
      ))}
      {/* Inicia un mapeo sobre la matriz month, donde cada row representa una semana y i es el índice de la semana. map devuelve un nuevo array con los resultados de la función proporcionada. */}
      {/* Filas de los días del mes */}
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {/* Inicia un mapeo sobre la row, donde cada day representa un día y idx es el índice del día dentro de la semana. */}
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
