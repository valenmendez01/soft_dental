import { CardHeader, Card, Divider, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardCuenta = () => {
  const { id } = useParams();
  const [logo, setLogo] = useState(null);
  const [firma, setFirma] = useState(null);
  const [data, setData] = useState({});
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [direccion, setDireccion] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Cargar los datos iniciales
  useEffect(() => {
    axios.get(`http://localhost:3001/pacientes/${id}/ficha/recetario`)
      .then(res => {
        setData(res.data);
        setNombre(res.data.nombre || "");
        setMatricula(res.data.matricula || "");
        setDireccion(res.data.direccion || "");
        setWhatsapp(res.data.whatsapp || "");
        console.log("Datos cargados:", res.data);
      })
      .catch(err => console.log("Error fetching data:", err));
  }, [id]);

  const handleLogo = (e) => {
    setLogo(e.target.files[0]);
  };
  
  const handleFirma = (e) => {
    setFirma(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('matricula', matricula);
    formData.append('direccion', direccion);
    formData.append('whatsapp', whatsapp);
    if (logo) {
      formData.append('imageLogo', logo);
    }
    if (firma) {
      formData.append('imageFirma', firma);
    }

    try {
      const response = await axios.post(`http://localhost:3001/pacientes/${id}/ficha/recetario/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Datos actualizados correctamente');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="w-full mt-4 px-4">
      <Card className="max-w-[100%]">
        <CardHeader className="flex justify-between mt-2">
          <div>
            <p className="text-2xl m-2">Recetario</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="d-flex justify-content-center align-items-left">
          <div className="ml-6 mr-6">
            <h1 className="text-lg">Datos predeterminados en la plantilla</h1>
            <form onSubmit={handleUpload}>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="text"
                    label="Nombre y apellido del odontólogo:"
                    labelPlacement="outside"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                  <Input
                    type="number"
                    label="Matrícula Prov.:"
                    labelPlacement="outside"
                    id="matricula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="text"
                    label="Dirección:"
                    labelPlacement="outside"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                  />
                  <Input
                    type="number"
                    label="WhatsApp:"
                    labelPlacement="outside"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row w-full md:flex-nowrap mb-6 md:mb-0 gap-4">
                  <Input
                    type="file"
                    label="Logo:"
                    labelPlacement="outside"
                    id="logo"
                    onChange={handleLogo} 
                    required
                  />
                  <img src={`http://localhost:3001/uploads/logo/${data.logo}`} alt="Logo" style={{width: '100px', height: '100px'}} />
                  <Input
                    type="file"
                    label="Firma y sello:"
                    labelPlacement="outside"
                    id="firma"
                    onChange={handleFirma}
                    required
                  />
                  <img src={`http://localhost:3001/uploads/firma/${data.firma}`} alt="Firma" style={{width: '100px', height: '100px'}} />
                </div>
              </div>
              <Button type="submit" color="success" variant="flat">Guardar</Button>
            </form>
          </div>
        </CardBody>
        <Divider/>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardCuenta;

      // <input type="file" onChange={handleLogo} />
      // <br />
      // <button onClick={handleUpload}>Subir imagen</button>
      // <br />
      // <img src={`http://localhost:3001/uploads/${data.image}`} alt="Recetario" />
      // <p>Image name: {data.image}</p>