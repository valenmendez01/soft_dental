import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DocumentForm = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    if (archivo) {
      formData.append('image', archivo);
    }

    try {
      const response = await axios.post(`http://localhost:5173/pacientes/${id}/ficha/recetario/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="archivo">Archivo:</label>
        <input
          type="file"
          id="archivo"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Subir Documento</button>
    </form>
  );
};

export default DocumentForm;

