/* eslint-disable react/prop-types */

// ContextWrapper es un componente proveedor que utiliza GlobalContext para proporcionar el estado y las funciones globales a sus componentes hijos. Maneja estados complejos y sincronización con localStorage, además provee funciones para actualizar estos estados y sincronizarlos con la interfaz de usuario.
import {
    useState,
    useEffect,
    useReducer,
    useMemo,
  } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs";
  
  // Función para manejar las acciones sobre los eventos guardados.
  function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "push": // Agrega un nuevo evento al estado.
        return [...state, payload];
      case "update": // Actualiza un evento existente en el estado.
        return state.map((evt) =>
          evt.id === payload.id ? payload : evt
        );
      case "delete": // Elimina un evento del estado.
        return state.filter((evt) => evt.id !== payload.id);
      default: // Lanza un error si la acción no es reconocida.
        throw new Error();
    }
  }

  // Función para inicializar los eventos desde el localStorage.
  function initEvents() {
    // Obtiene los eventos guardados del almacenamiento local.
    const storageEvents = localStorage.getItem("savedEvents");
    // Convierte la cadena JSON en un objeto JavaScript.
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }
  
  export default function ContextWrapper(props) {
    // Estado y función para manejar el índice del mes actual.
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    // Estado y función para manejar el índice de la semana actual.
    const [weekIndex, setWeekIndex] = useState(dayjs().week());
    // Estado y función para manejar el mes del calendario pequeño.
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    // Estado y función para manejar el día seleccionado.
    const [daySelected, setDaySelected] = useState(dayjs());
    // Estado y función para manejar la visibilidad del modal de eventos.
    const [showEventModal, setShowEventModal] = useState(false);
    // Estado y función para manejar el evento seleccionado.
    const [selectedEvent, setSelectedEvent] = useState(null);
    // Estado y función para manejar las etiquetas de los eventos.
    const [labels, setLabels] = useState([]);
    // Estado y funcion para manejar hora de inicio y fin
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    // Estado y función para manejar los eventos guardados. initEvents inicializa el estado desde el localStorage.
    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer,
      [],
      initEvents
    );
  
    // Filtra los eventos guardados basándose en las etiquetas seleccionadas.
    const filteredEvents = useMemo(() => {
      return savedEvents.filter((evt) =>
        labels
          .filter((lbl) => lbl.checked)
          .map((lbl) => lbl.label)
          .includes(evt.label)
      );
    }, [savedEvents, labels]);
  
    // Guarda los eventos en el localStorage cada vez que savedEvents cambia.
    useEffect(() => {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);
  
    // Actualiza las etiquetas basándose en los eventos guardados.
    useEffect(() => {
      // Establece las etiquetas. Para cada etiqueta, si ya existe en las etiquetas previas, mantiene su estado checked.
      setLabels((prevLabels) => {
        return [...new Set(savedEvents.map((evt) => evt.label))].map(
          (label) => {
            const currentLabel = prevLabels.find(
              (lbl) => lbl.label === label
            );
            return {
              label,
              checked: currentLabel ? currentLabel.checked : true,
            };
          }
        );
      });
    }, [savedEvents]);
  
    // Sincroniza el mes del calendario pequeño. Sincroniza el monthIndex con smallCalendarMonth cuando este último no es null.
    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
      }
    }, [smallCalendarMonth]);
  
    // Limpia el evento seleccionado cuando el modal de eventos se cierra.
    useEffect(() => {
      if (!showEventModal) {
        setSelectedEvent(null);
      }
    }, [showEventModal]);
  
    // Función para actualizar una etiqueta específica.
    function updateLabel(label) {
      setLabels(
        labels.map((lbl) => (lbl.label === label.label ? label : lbl))
      );
    }
  
    return (
      // Provee el contexto con los valores y funciones definidos a todos los componentes hijos.
      <GlobalContext.Provider
        // El valor del contexto que contiene todos los estados y funciones definidos.
        value={{
          weekIndex,
          setWeekIndex,
          monthIndex,
          setMonthIndex,
          smallCalendarMonth,
          setSmallCalendarMonth,
          daySelected,
          setDaySelected,
          showEventModal,
          setShowEventModal,
          dispatchCalEvent,
          selectedEvent,
          setSelectedEvent,
          startTime,
          setStartTime,
          endTime,
          setEndTime,
          savedEvents,
          setLabels,
          labels,
          updateLabel,
          filteredEvents,
        }}
      >
        {/* Los componentes hijos que consumirán el contexto. */}
        {props.children}
      </GlobalContext.Provider>
    );
  }