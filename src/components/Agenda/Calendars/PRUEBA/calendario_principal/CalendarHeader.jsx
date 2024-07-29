
import dayjs from "dayjs";
import { useContext } from "react";
//import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CreateEventButton from "../aside/CreateEventButton";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <div className="flex items-center">
        <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
          <button
            onClick={handlePrevMonth}
            type="button"
            className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={handleReset}
            type="button"
            className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            onClick={handleNextMonth}
            type="button"
            className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="ml-6 h-6 w-px bg-gray-300" />
          <CreateEventButton />
        </div>
      </div>
    </header>
  );
}
