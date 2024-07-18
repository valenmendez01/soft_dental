/* eslint-disable no-undef */
// se corre con node index.jsx

const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "",
  database:"soft_dental_database"
})

// Insertar datos desde el formulario del front
app.post("/create", (req,res)=>{
  // Cuando se haga la consulta (req), y obtengamos una respuesta (res):
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const nacimiento = req.body.nacimiento;
  const sexo = req.body.sexo;
  const dni = req.body.dni;
  const celular = req.body.celular;

  // Query para hacer el envio de los datos a las const anteriores: 
  db.query('INSERT INTO registro_pacientes(nombre,apellido,nacimiento,sexo,dni,celular) VALUES(?,?,?,?,?,?)', [nombre, apellido, nacimiento, sexo, dni, celular],
    (err,result)=>{
      if(err){
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

// Query para listar los datos de la base de datos al front
app.get("/pacientes", (req,res)=>{
  db.query('SELECT * FROM registro_pacientes',
    (err,result)=>{
      if(err){
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update", (req,res)=>{
  const id = req.body.id;
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const dni = req.body.dni;
  const estado = req.body.estado;

  db.query('UPDATE registro_pacientes SET nombre=?,edad=?,dni=?,estado=? WHERE id=?', [nombre, edad, dni, id, estado],
    (err,result)=>{
      if(err){
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req,res)=>{
  const id = req.params.id;

  db.query('DELETE FROM registro_pacientes WHERE id=?',id,
    (err,result)=>{
      if(err){
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001,() => {
  console.log("corriendo en puerto 3001")
});