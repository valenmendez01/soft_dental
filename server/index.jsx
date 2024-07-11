/* eslint-disable no-undef */
// se corre con node index.jsx

const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "",
  database:"soft_dental_database"
})

// Cuando se haga la consulta, y obtengamos una respuesta:
app.post("/create", (req,res)=>{
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const dni = req.body.dni;

  db.query('INSERT INTO registro_pacientes(nombre,edad,dni) VALUES(?,?,?)', [nombre, edad, dni],
    (err,result)=>{
      if(err){
        console.log(err)
      } else {
        res.send(result);
      }
    }
  );
});

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

  db.query('UPDATE registro_pacientes SET nombre=?,edad=?,dni=? WHERE id=?', [nombre, edad, dni, id],
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