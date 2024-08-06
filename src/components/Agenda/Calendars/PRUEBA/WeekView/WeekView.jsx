import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

// Componente que muestra los días de la semana actual
function WeekView() {
  const { weekIndex, filteredEvents, setShowEventModal, setSelectedEvent } = useContext(GlobalContext);
  const [weekDays, setWeekDays] = useState([]);
  const [intervals, setIntervals] = useState([]);
  const [eventsByDay, setEventsByDay] = useState({}); // Para almacenar eventos por día

  useEffect(() => {
    // Calcula el primer día de la semana según el weekIndex
    const startOfWeek = dayjs().week(weekIndex).startOf("week");

    // Genera los días de la semana
    const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));

    setWeekDays(days);
  }, [weekIndex]);

  useEffect(() => {
    // Genera intervalos de tiempo de 30 minutos desde las 12 AM hasta las 11 PM
    const startTime = dayjs().startOf('day'); // Comienza a las 12 AM
    const endTime = dayjs().endOf('day').subtract(30, 'minute'); // Termina a las 11:30 PM
    const intervals = [];

    let currentTime = startTime;

    while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
      intervals.push(currentTime.format('h:mm A'));
      currentTime = currentTime.add(30, 'minute'); // o (1, 'hour') cada una hora
    }

    setIntervals(intervals);
  }, []);

  // Filtra los eventos en filteredEvents para encontrar aquellos que caen en la semana actual
  useEffect(() => {
    const eventsByDay = {};
    weekDays.forEach(day => {
      const events = filteredEvents.filter(
        (evt) => dayjs(evt.day).startOf('day').isSame(day.startOf('day'))
      );
      eventsByDay[day.format("DD-MM-YY")] = events;
    });
    setEventsByDay(eventsByDay);
  }, [filteredEvents, weekDays]);

  // Función para obtener la clase CSS para el día actual
  function getCurrentDayClass(day) {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
      : "";
  }

  function getGridRow(startTime, endTime) {
    const startMinutes = startTime.hour() * 60 + startTime.minute();
    const endMinutes = endTime.hour() * 60 + endTime.minute();
    const intervalHeight = 30; // Intervalo de 30 minutos
    const startRow = Math.ceil(startMinutes / intervalHeight) + 1; // La primera fila es 1
    const span = Math.ceil((endMinutes - startMinutes) / intervalHeight);

    console.log(`Start Time: ${startTime.format('h:mm A')}, End Time: ${endTime.format('h:mm A')}, Start Row: ${startRow}, Span: ${span}`);
    return `${startRow} / span ${span}`;
  }

  return (
    <div className="isolate flex flex-auto flex-col overflow-auto bg-white">
      <div className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
        <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
          <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
            <div className="col-end-1 w-14"></div>
            {weekDays.map((day, index) => (
              <div key={index} className="flex items-center justify-center py-3">
                <div>{day.format("ddd")}</div>
                <span className={`items-center justify-center font-semibold text-gray-900 ml-1.5 ${getCurrentDayClass(day)}`}>
                  {day.format("DD")}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-auto">
          <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100"></div>
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
          <div className="row-end-1 h-7"></div>
            {/* Horizontal lines */}
            <div className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100">
              <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                {intervals.map((time, index) => (
                  <div key={index} className="p-2">
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical lines */}
            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
              <div className="col-start-1 row-span-full"></div>
              <div className="col-start-2 row-span-full"></div>
              <div className="col-start-3 row-span-full"></div>
              <div className="col-start-4 row-span-full"></div>
              <div className="col-start-5 row-span-full"></div>
              <div className="col-start-6 row-span-full"></div>
              <div className="col-start-7 row-span-full"></div>
              <div className="col-start-8 row-span-full w-8"></div>
            </div>

            {/* Events */}
            <ol 
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
              style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
            >
              {weekDays.map((day) => (
                  eventsByDay[day.format("DD-MM-YY")]?.map((event, eventIndex) => {
                    const startTime = dayjs(event.startTime);
                    const endTime = dayjs(event.endTime);

                    // Calcula el col-start para el día de la semana
                    const colStart = weekDays.findIndex(d => d.isSame(day, 'day')) + 1;

                    // Console log para verificar
                    console.log(`Day: ${day.format('DD-MM-YY')}, Col Start: ${colStart}`);
                    return (
                      <li key={eventIndex} className="relative mt-px flex" style={{ gridRow: getGridRow(startTime, endTime), gridColumn: `${colStart} / span 1` }}>
                        <a
                          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowEventModal(true);
                          }}
                        >
                          <p className="order-1 font-semibold text-blue-700">{event.title}</p>
                          <p className="text-blue-500 group-hover:text-blue-700">
                            <time dateTime={event.startTime}>{dayjs(event.startTime).format('h:mm A')}</time> - <time dateTime={event.endTime}>{dayjs(event.endTime).format('h:mm A')}</time>
                          </p>
                        </a>
                      </li>
                    );
                  })
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekView;



