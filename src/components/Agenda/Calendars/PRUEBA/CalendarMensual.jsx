import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./Utils_days"; // Esta función genera una matriz de días para un mes específico.
import CalendarHeader from "./calendario_principal/CalendarHeader";
//import Sidebar from "./aside/Sidebar";
import Month from "./calendario_principal/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./EventModal";
import Labels from "./calendario_principal/Labels";

const PruebaCalendar = () => {
    // Crea una variable de estado currentMonth y su función setCurrentMonth. Inicializa currentMonth con el valor retornado por getMonth() (el mes actual).
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    // Extrae monthIndex y showEventModal del GlobalContext
    const { monthIndex, showEventModal } = useContext(GlobalContext);
    
    // Define un efecto que se ejecuta cuando monthIndex cambia.
    useEffect(() => {
    // Dentro del useEffect, llama a getMonth con monthIndex y actualiza currentMonth con el nuevo valor.
      setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

  return (
    <React.Fragment>
      {/* Renderiza EventModal si showEventModal es true */}
      {showEventModal && <EventModal />}

      <div className="lg:flex lg:h-full lg:flex-col">
        <CalendarHeader />
        <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
          {/* <Sidebar /> */}
          {/* Renderiza el componente Month, pasando currentMonth como una prop. */}
          <Month month={currenMonth} />
        </div>
        <Labels />
      </div>
    </React.Fragment>
  );
}

export default PruebaCalendar
