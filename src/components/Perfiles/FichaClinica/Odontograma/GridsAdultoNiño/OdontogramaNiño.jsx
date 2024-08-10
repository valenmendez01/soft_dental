import PoligonosOdontograma from "../SVG/PoligonosOdontograma";

const OdontogramaCatastral = () => {
  const dientesSuperioresIzq = [
    { numero: 55 }, { numero: 54 }, { numero: 53 }, { numero: 52 }, { numero: 51 }
  ];
  const dientesSuperioresDer = [
    { numero: 61 }, { numero: 62 }, { numero: 63 }, { numero: 64 }, { numero: 65 }
  ];
  const dientesInferioresIzq = [
    { numero: 85 }, { numero: 84 }, { numero: 83 }, { numero: 82 }, { numero: 81 }
  ];
  const dientesInferioresDer = [
    { numero: 71 }, { numero: 72 }, { numero: 73 }, { numero: 74 }, { numero: 75 }
  ];

  const renderDientes = (dientes, reverse = false) => {
    return dientes.map((diente, index) => (
      <div key={index} className={`d-flex flex-column align-items-center ${reverse ? "flex-column-reverse" : ""}`}>
        <h1>{diente.numero}</h1>
        <PoligonosOdontograma />
      </div>
    ));
  };

  return (
    <div className="container overflow-hidden mt-4 text-center">
      <div className="row row-cols-2">
        <div className="col">
          <div className="d-flex justify-content-end">
            {renderDientes(dientesSuperioresIzq)}
          </div>
        </div>
        <div className="col border-start">
          <div className="d-flex">
            {renderDientes(dientesSuperioresDer)}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-7 border-top"></div>
      </div>
      <div className="row row-cols-2">
        <div className="col">
          <div className="d-flex justify-content-end">
            {renderDientes(dientesInferioresIzq, true)}
          </div>
        </div>
        <div className="col border-start">
          <div className="d-flex">
            {renderDientes(dientesInferioresDer, true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdontogramaCatastral;