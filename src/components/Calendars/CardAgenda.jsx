
import {Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button } from "@nextui-org/react";


const CardAgenda = () => {
  return (
    <Card className="max-w-[100%]">
      <CardHeader className="flex align-middle justify-between">
        <div>
          <p className="text-xl m-2">Agenda</p>
        </div>
        <div className="flex flex-col mt-4 items-end">

        </div>
      </CardHeader>
      <Divider/>
      <CardBody>

      </CardBody>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default CardAgenda