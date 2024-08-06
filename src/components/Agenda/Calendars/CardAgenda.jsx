
import {Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Navbar_agenda from "../Navbar_agenda"
import CalendarMensual from "./PRUEBA/CalendarMensual"
import WeekViewCalendar from "./PRUEBA/WeekView/WeekViewCalendar"
import CalendarDiario from "./PRUEBA/aside/CalendarDiario";
import { useLocation } from 'react-router-dom';
import WeekViewCalendar2 from "./PRUEBA/WeekView/WeekViewCalendar2";

const CardAgenda = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/agenda':
        return <CalendarDiario />;
      case '/agenda/mensual':
        return <CalendarMensual />;
      case '/agenda/semanal':
        return <WeekViewCalendar />;
      case '/agenda/prueba':
        return <WeekViewCalendar2 />;
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