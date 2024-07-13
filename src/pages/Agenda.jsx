
import Calendar from "../components/Calendars/Calendar"
import CalendarViewWithUpcomingEvent from "../components/Calendars/CalendarViewWithUpcomingEvent"
import CardAgenda from "../components/Calendars/CardAgenda"
import DayViewCalendar from "../components/Calendars/DayViewCalendar"
import WeekViewCalendar from "../components/Calendars/WeekViewCalendar"

const Agenda = () => {
  return (
    <div className='container-fluid p-5 vh-100'>
      <CardAgenda />
      {/* <Calendar />
      <WeekViewCalendar />
      <DayViewCalendar />
      <CalendarViewWithUpcomingEvent /> */}
    </div>
  )
}

export default Agenda