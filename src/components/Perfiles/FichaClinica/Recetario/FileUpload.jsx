import axios from "axios";
import { useState } from "react"

const FileUpload = () => {
  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }
  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append('image',file);
    axios.post(`http://localhost:5173/pacientes/${id}/ficha/recetario/upload`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Subir imagen</button>
    </div>
  )
}

export default FileUpload