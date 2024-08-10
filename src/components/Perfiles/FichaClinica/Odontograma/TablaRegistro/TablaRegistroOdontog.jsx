import { useEffect, useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "../../../../RegistroPacientes/TableRegistrosPacientes/EditIcon";
import { DeleteIcon } from "../../../../RegistroPacientes/TableRegistrosPacientes/DeleteIcon";
import axios from "axios";
import Swal from "sweetalert2";

const INITIAL_VISIBLE_COLUMNS = ["celular", "nombre", "apellido", "nacimiento", "sexo", "dni", "acciones"];

const columns = [
  { uid: "celular", name: "Fecha" },
  { uid: "nombre", name: "Pieza" },
  { uid: "apellido", name: "Cara" },
  { uid: "nacimiento", name: "Prestación" },
  { uid: "sexo", name: "Descripción" },
  { uid: "dni", name: "Observación" },
  { uid: "acciones", name: "Acciones" }
];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "nacimiento",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const [pacientesList, setPacientesList] = useState([]);

  const getPacientes = () => {
    axios.get("http://localhost:3001/pacientes").then((response) => {
      setPacientesList(response.data);
    });
  };

  useEffect(() => {
    getPacientes();
  }, []);

  const deletePaciente = (val) => {
    Swal.fire({
      title: "Eliminar paciente",
      html: `<i>Realmente desea eliminar a <strong>${val.nombre}</strong>?</i>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/delete/${val.id}`).then(() => {
          getPacientes();
          Swal.fire({
            title: "Eliminado!",
            html: `${val.nombre} fue eliminado`,
            icon: "success",
            timer: 3000,
          });
        }).catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se logró eliminar el paciente",
            footer: JSON.parse(JSON.stringify(error)).message,
          });
        });
      }
    });
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    if (hasSearchFilter) {
      return pacientesList.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return pacientesList;
  }, [filterValue, pacientesList]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((paciente, columnKey) => {
    const cellValue = paciente[columnKey];
    if (columnKey === "acciones") {
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Editar paciente">
            <span
              className="text-lg text-default-400 cursor-pointer active:opacity-50"
              onClick={() => editarPaciente(paciente)}
            >
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Eliminar paciente">
            <span
              className="text-lg text-danger cursor-pointer active:opacity-50"
              onClick={() => deletePaciente(paciente)}
            >
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    }
    return <span>{cellValue}</span>;
  }, []);

  const bottomContent = useMemo(() => {
    return (
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        page={page}
        total={pages}
        onChange={setPage}
        className="d-flex justify-center"
      />
    );
  }, [page, pages]);

  return (
    <Table
      aria-label="Pacientes"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {headerColumns.map((column) => (
          <TableColumn key={column.uid}>{column.name}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="Ningún paciente encontrado" items={sortedItems}>
        {sortedItems.map((paciente) => (
          <TableRow key={paciente.id}>
            {headerColumns.map((column) => (
              <TableCell key={column.uid}>
                {renderCell(paciente, column.uid)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
