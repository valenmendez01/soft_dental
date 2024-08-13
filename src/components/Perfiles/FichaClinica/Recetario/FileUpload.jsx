import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FileUpload = () => {
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
        console.log("Datos cargados:", res.data); // Añade este log
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
    <div>
      <h1>DATOS PREDETERMINADOS</h1>
      <form onSubmit={handleUpload}>
        <div>
          <label>Nombre y apellido del odontólogo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Matrícula Prov.:</label>
          <input
            type="number"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>WhatsApp:</label>
          <input
            type="number"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Logo:</label>
          <input 
            type="file" 
            id="logo"
            onChange={handleLogo} 
          />
          <img src={`http://localhost:3001/uploads/logo/${data.logo}`} alt="Logo" style={{width: '100px', height: '100px'}} />
        </div>
        <div>
          <label>Firma y/o sello:</label>
          <input 
            type="file"
            id="firma"
            onChange={handleFirma} 
          />
          <img src={`http://localhost:3001/uploads/firma/${data.firma}`} alt="Firma" style={{width: '100px', height: '100px'}} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FileUpload;


      // <input type="file" onChange={handleLogo} />
      // <br />
      // <button onClick={handleUpload}>Subir imagen</button>
      // <br />
      // <img src={`http://localhost:3001/uploads/${data.image}`} alt="Recetario" />
      // <p>Image name: {data.image}</p>