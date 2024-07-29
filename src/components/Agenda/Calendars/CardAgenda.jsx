
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Navbar_agenda from "../Navbar_agenda"
import Calendar from "./Calendar"
import CalendarViewWithUpcomingEvent from "./CalendarViewWithUpcomingEvent"
import WeekViewCalendar from "./WeekViewCalendar"
import PruebaCalendar from "./PRUEBA/PruebaCalendar"
import { useLocation } from 'react-router-dom';

const CardAgenda = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/agenda':
        return <CalendarViewWithUpcomingEvent />;
      case '/agenda/mensual':
        return <Calendar />;
      case '/agenda/semanal':
        return <WeekViewCalendar />;
      case '/agenda/prueba':
        return <PruebaCalendar />;
      default:
        return <div>404 - Not Found</div>;
    }
  };
  return (
    <Card className="max-w-[100%]">
      <CardHeader>
        <Navbar_agenda />
      </CardHeader>
      <Divider/>
      <CardBody>
        {renderContent()}
      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default CardAgenda