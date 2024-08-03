import { useContext } from "react";
import CreateEventButton from "../calendario_principal/CreateEventButton"
import SmallCalendar from "./SmallCalendar"
import GlobalContext from "../context/GlobalContext";

const CalendarDiario = () => {
    const { daySelected, savedEvents } = useContext(GlobalContext);
    
    // Filtra los eventos guardados según el día seleccionado
    const eventsForSelectedDay = savedEvents.filter(
        (event) => daySelected && daySelected.isSame(event.day, 'day')
    );
  return (
    <div>
        <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
            <h2 className="text-base font-semibold leading-6 text-gray-900">
                Próximos turnos
            </h2>
            <div className="hidden md:ml-4 md:flex md:items-center">
                <div className="ml-6 h-6 w-px bg-gray-300" />
                <CreateEventButton />
            </div>
        </header>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
            <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"> 
                <SmallCalendar />
            </div>
            <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                <h1>
                    {eventsForSelectedDay.length > 0 ? (
                        eventsForSelectedDay.map((event, index) => (
                            <div key={index} className="event-item">
                                <p>{event.title}</p>
                                <p>{event.description}</p>
                                {/* Agrega cualquier otra información del evento que desees mostrar */}
                            </div>
                        ))
                    ) : (
                        <p>No hay eventos para el día seleccionado</p>
                    )}
                </h1>
            </ol>
        </div>
    </div>
  )
}

export default CalendarDiario
