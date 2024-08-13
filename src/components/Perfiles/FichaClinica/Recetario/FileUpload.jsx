import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const FileUpload = () => {
  const { id } = useParams();
  const [file, setFile] = useState();
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }
  useEffect(() => {
    axios.get(`http://localhost:5173/pacientes/${id}/ficha/recetario/`)
    .then(res => {
      setData(res.data[0])
    })
    .catch(err => console.log(err))
  }, [])

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append('image',file);
    axios.post(`http://localhost:5173/pacientes/${id}/ficha/recetario/upload`, formdata)
    .then(res => {
      if(res.data.Status === "Success"){
        console.log("Succeded")
      } else{
        console.log("Failed")
      }
    })
    .catch(err => console.log(err));
  }
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Subir imagen</button>
      <br />
      <img src={`http://localhost:5173/pacientes/${id}/ficha/recetario/uploads` + data.image} alt="" />
    </div>
  )
}

export default FileUpload