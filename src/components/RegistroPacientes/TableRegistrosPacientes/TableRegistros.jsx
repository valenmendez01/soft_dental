import { useEffect, useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Tooltip,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon2";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { capitalize } from "./utils";
import ModalForm from "../ModalForm";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import axios from "axios";
import Swal from "sweetalert2";
import { EyeIcon } from "./EyeIcon";

const INITIAL_VISIBLE_COLUMNS = ["nombre", "apellido", "dni", "acciones"];

const columns = [
  { uid: "nombre", name: "Nombre" },
  { uid: "apellido", name: "Apellido" },
  { uid: "nacimiento", name: "Nacimiento" },
  { uid: "sexo", name: "Sexo" },
  { uid: "dni", name: "DNI" },
  { uid: "celular", name: "Celular" },
  { uid: "acciones", name: "Acciones" },
];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  // Función para eliminar paciente
  const deletePaciente = (val) =>{
    Swal.fire({ // muestra una alerta de confirmación antes de eliminar.
      title: "Eliminar paciente",
      html: "<i>Realmente desea eliminar a<strong>"+val.nombre+"</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/delete/${val.id}`, {}).then(()=>{ // envía una solicitud DELETE al servidor para eliminar un paciente
          getPacientes(); // se llama para actualizar la lista de pacientes después de eliminar.
          Swal.fire({
            title:"Eliminado!",
            html:val.nombre+ "fue eliminado",
            icon:"success",
            timer:3000
          });
      }).catch(function(error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logró eliminar el empleado",
          footer: JSON.parse(JSON.stringify(error)).message
        });
      });
  }
  })}

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...pacientesList];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
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
    switch (columnKey) {
      case "nombre":
        return <span>{cellValue}</span>;
      case "apellido":
        return <span>{cellValue}</span>;
      case "nacimiento":
        return <span>{cellValue}</span>;
      case "sexo":
        return <span>{cellValue}</span>;
      case "dni":
        return <span>{cellValue}</span>;
      case "celular":
        return <span>{cellValue}</span>;
      case "acciones":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalle">
              <span 
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => detallePaciente(paciente)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
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
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Columnas de Tabla"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <ModalForm />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {pacientesList.length} pacientes</span>
          <label className="flex items-center text-default-400 text-small">
            Filas visibles por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, visibleColumns, onRowsPerPageChange, pacientesList.length, onSearchChange, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previo
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [page, pages, onNextPage, onPreviousPage]);

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
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {headerColumns.map((column) => (
          <TableColumn key={column.uid}>{column.name}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={"Ningún paciente encontrado"} items={sortedItems}>
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
