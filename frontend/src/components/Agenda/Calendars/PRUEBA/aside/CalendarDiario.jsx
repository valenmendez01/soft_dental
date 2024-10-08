import CreateEventButton from "../calendario_principal/CreateEventButton"
import SmallCalendar from "./SmallCalendar"
import ListaEventos from "./ListaEventos";

const CalendarDiario = () => {
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
                <ListaEventos />
            </ol>
        </div>
    </div>
  )
}

export default CalendarDiario
