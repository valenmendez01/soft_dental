import { Textarea } from "@nextui-org/react";

const TextEditor = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-7">
      <Textarea
        label="Prescripción"
        placeholder="Escriba aquí"
        labelPlacement="outside"
      />
    </div>
  );
};

export default TextEditor;
