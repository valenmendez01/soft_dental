import { useContext } from "react";
import dayjs from "dayjs";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import { EditIcon } from "../../../../RegistroPacientes/TableRegistrosPacientes/EditIcon";
import { DeleteIcon } from "../../../../RegistroPacientes/TableRegistrosPacientes/DeleteIcon";
import { EyeIcon } from "../../../../RegistroPacientes/TableRegistrosPacientes/EyeIcon";
import GlobalContext from "../context/GlobalContext";

const ListaEventos = () => {
  const { daySelected, savedEvents } = useContext(GlobalContext);

  // Verifica que daySelected esté definido y sea una instancia de dayjs
  if (!daySelected) return <p>No hay un día seleccionado.</p>;

  // Filtra los eventos guardados según el día seleccionado
  const eventsForSelectedDay = savedEvents.filter(
    (event) => daySelected && daySelected.isSame(dayjs(event.day), 'day')
  );

  const columns = [
    { name: "Nombre", uid: "title" },
    { name: "Descripcion", uid: "description" },
    { name: "Hora", uid: "time" },
    { name: "Acciones", uid: "actions" },
  ];

  const renderCell = (event, columnKey) => {
    const cellValue = event[columnKey];

    switch (columnKey) {
      case "title":
        return <div className="text-bold text-sm capitalize">{cellValue || 'Nombre no disponible'}</div>;
      case "description":
        return <div className="text-bold text-sm capitalize">{cellValue || 'Sin descripcion'}</div>;
      case "time":
        return (
            <div className="text-bold text-sm capitalize">
              {event.startTime && event.endTime
                ? `${dayjs(event.startTime).format("HH:mm")} - ${dayjs(event.endTime).format("HH:mm")}`
                : 'Hora no disponible'}
            </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar evento">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar evento">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue || 'Información no disponible';
    }
  };

  return (
    <Table hideHeader aria-label="Eventos del día seleccionado">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {eventsForSelectedDay.length === 0 ? (
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.uid} align="center">
                {column.uid === "title" ? "No hay eventos para el día seleccionado." : ""}
              </TableCell>
            ))}
          </TableRow>
        ) : (
          eventsForSelectedDay.map((event) => (
            <TableRow key={event.id}>
              {columns.map((column) => (
                <TableCell key={column.uid}>{renderCell(event, column.uid)}</TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ListaEventos;
