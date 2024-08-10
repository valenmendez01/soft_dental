import { useState } from 'react';
import { Switch } from '@nextui-org/react';
import OdontogramaNiño from "../GridsAdultoNiño/OdontogramaNiño"
import OdontogramaAdulto from "../GridsAdultoNiño/OdontogramaAdulto"
import Inputs from '../Inputs/Inputs';
import TablaRegistroOdontog from '../TablaRegistro/TablaRegistroOdontog';
import { useColorContext } from '../SVG/ColorContext';

const Catastral = () => {
  const [isAdulto, setIsAdulto] = useState(true);
  const { setSelectedColor } = useColorContext();
  const [selectedBox, setSelectedBox] = useState("red");

  const handleSwitchChange = () => {
    setIsAdulto(!isAdulto);
  };
  const handleBoxClick = (box) => {
    setSelectedColor(box);
    setSelectedBox(box);
  };

  return (
    <div className="container mt-4 text-center">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <Switch 
          defaultSelected
          checked={isAdulto}
          onChange={handleSwitchChange}
        >
          {isAdulto ? "Odontograma adulto" : "Odontograma niño"}
        </Switch>
        <div className="flex space-x-4">
          <div
            className={`w-5 h-5 cursor-pointer rounded-lg ${
              selectedBox === "red" ? "ring-2 ring-offset-2 ring-red-500" : ""
            } bg-red-500`}
            onClick={() => handleBoxClick("red")}
          ></div>
          <div
            className={`w-5 h-5 cursor-pointer rounded-lg ${
              selectedBox === "blue" ? "ring-2 ring-offset-2 ring-blue-500" : ""
            } bg-blue-500`}
            onClick={() => handleBoxClick("blue")}
          ></div>
        </div>
      </div>
      {isAdulto ? <OdontogramaAdulto /> : <OdontogramaNiño />}
      <Inputs />
      <div className='mt-10'>
        <TablaRegistroOdontog />
      </div>
    </div>
  );
};

export default Catastral;