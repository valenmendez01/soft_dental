import { Card, CardHeader, Divider, Image } from "@nextui-org/react"

const MiniCardAtencion = () => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-9 grid-rows-1 px-3">
        <Card className="col-span-12 sm:col-span-3 h-[150px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Alertas médicas</p>
            <Divider />
            <h4 className="text-black font-medium text-large">Ninguna</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
        />
        </Card>
        <Card className="col-span-10 sm:col-span-3 h-[150px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Enfermedades</p>
            <Divider />
            <h4 className="text-black font-medium text-large">Ninguno</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
        />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[150px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Medicamentos</p>
            <Divider />
            <h4 className="text-black font-medium text-large">Ninguno</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
        />
        </Card>
    </div>
  )
}

export default MiniCardAtencion
