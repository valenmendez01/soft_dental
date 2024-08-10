
import PoligonosOdontograma from "../SVG/PoligonosOdontograma";

const OdontogramaCatastral = () => {
  const dientesSuperioresIzq = [
    { numero: 18 }, { numero: 17 }, { numero: 16 }, { numero: 15 },
    { numero: 14 }, { numero: 13 }, { numero: 12 }, { numero: 11 }
  ];
  const dientesSuperioresDer = [
    { numero: 21 }, { numero: 22 }, { numero: 23 }, { numero: 24 },
    { numero: 25 }, { numero: 26 }, { numero: 27 }, { numero: 28 }
  ];
  const dientesInferioresIzq = [
    { numero: 48 }, { numero: 47 }, { numero: 46 }, { numero: 45 },
    { numero: 44 }, { numero: 43 }, { numero: 42 }, { numero: 41 }
  ];
  const dientesInferioresDer = [
    { numero: 31 }, { numero: 32 }, { numero: 33 }, { numero: 34 },
    { numero: 35 }, { numero: 36 }, { numero: 37 }, { numero: 38 }
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
        <div className="col-11 border-top"></div>
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