/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export default function Day({ day }) {
  // Crea una variable de estado dayEvents (una lista de eventos para el día actual) y su función setDayEvents para actualizarla
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected, // función para seleccionar un día.
    setShowEventModal, // función para mostrar el modal de eventos.
    filteredEvents, // lista de eventos filtrados.
    setSelectedEvent, // función para seleccionar un evento.
  } = useContext(GlobalContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Define un efecto que se ejecuta cuando filteredEvents o day cambian.
  useEffect(() => {
    // Filtra los eventos en filteredEvents para encontrar aquellos que coinciden con el día actual.
    const events = filteredEvents.filter(
      // Compara la fecha del evento con la fecha del día actual, formateándolas de la misma manera para asegurarse de que coincidan.
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    // Actualiza dayEvents con los eventos filtrados.
    setDayEvents(events);
  }, [filteredEvents, day]);

  // Define una función para obtener la clase CSS para el día actual (que lo marque en azul).
  function getCurrentDayClass() {
    // Compara el día actual con el día de hoy.
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      // Si el día es hoy, devuelve una cadena de clases CSS para resaltar el día actual.
      ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
      // Si el día no es hoy, devuelve una cadena vacía.
      : "";
  }

  function isCurrentMonth() {
    return day.month() === dayjs().month();
  }
  
  return (
    <div
      className={`border border-gray-200 flex flex-col p-2 ${
        isCurrentMonth() ? "" : 'bg-gray-50 text-gray-500'
      }`}
    >
      <div
          className="flex-1 cursor-pointer"
          onClick={() => {
            {/* Selecciona el día actual. */}
            setDaySelected(day);
            {/* Muestra el modal de eventos. */}
            setShowEventModal(true);
          }}
        >
        <header className="flex flex-col">
          <div className="flex text-xs leading-6 text-gray-700 lg:flex-auto">
            <p
              className={`text-gray-500 p-1 my-1 ${getCurrentDayClass()}`}
            >
              {day.format("DD")} {/* numero del dia */}
            </p>
          </div>
        </header>
        <div className="text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none mt-1">
          <div className="flex-1 cursor-pointer sr-only sm:not-sr-only py-4">
            {/* Mapea sobre dayEvents para renderizar cada evento. */}
            {dayEvents.slice(0, 2).map((evt, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedEvent(evt)}
                /* Aplica clases de Tailwind CSS para el estilo del contenedor del evento. */
                className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
              >
                {/* Muestra el título del evento. */}
                {evt.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <Popover isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen} placement="right">
                <PopoverTrigger>
                  <div className="text-blue-500 cursor-pointer">
                    {`${dayEvents.length - 2} eventos más`}
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="cursor-pointer">
                    {dayEvents.slice(2).map((evt, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedEvent(evt);
                          setIsPopoverOpen(false);
                        }}
                        className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                      >
                        {evt.title}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}