import { DatePicker, Textarea } from "@nextui-org/react";

const TextInput = ({ formData, setFormData }) => {
  if (!formData) return null; // Asegúrate de que formData esté definido

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Textarea
          name="prescripcion"
          label="Prescripción"
          placeholder="Escriba aquí"
          labelPlacement="outside"
          value={formData.prescripcion || ""}
          onChange={handleInputChange}
        />
        <Textarea
          name="diagnostico"
          label="Diagnóstico"
          placeholder="Escriba aquí"
          labelPlacement="outside"
          value={formData.diagnostico || ""}
          onChange={handleInputChange}
        />
        <DatePicker
          label="Fecha"
          labelPlacement="outside"
          dateFormat="yyyy-MM-dd"
          selected={formData.fecha || null}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
