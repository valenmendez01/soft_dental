/* eslint-disable no-unused-vars */

// GlobalContext es un contexto de React que proporciona un conjunto de valores y funciones globales para la aplicación. Define el estado y las funciones que estarán disponibles para todos los componentes que consumen este contexto.
import React from "react";

// Crea un contexto global con valores por defecto.
const GlobalContext = React.createContext({
  // Controlan el índice del mes actual.
  monthIndex: 0,
  setMonthIndex: (index) => {},
  // Controlan el índice del mes en un calendario pequeño.
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  // Manejan el día seleccionado.
  daySelected: null,
  setDaySelected: (day) => {},
  // Controlan la visibilidad del modal de eventos.
  showEventModal: false,
  setShowEventModal: () => {},
  // Despacha eventos de calendario.
  dispatchCalEvent: ({ type, payload }) => {},
  // Almacena eventos guardados.
  savedEvents: [],
  // Manejan el evento seleccionado.
  selectedEvent: null,
  setSelectedEvent: () => {},
  // Manejan etiquetas.
  setLabels: () => {},
  labels: [],
  // Actualiza una etiqueta.
  updateLabel: () => {},
  // Eventos filtrados.
  filteredEvents: [],
});

export default GlobalContext;
