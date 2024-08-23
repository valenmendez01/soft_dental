// Lógica de negocio relacionada con pacientes

const db = require('../db/connection');

// Insertar datos desde el formulario del front
const createPaciente = (req, res) => {
  const { nombre, apellido, dni } = req.body;

  // Query para hacer el envio de los datos a las const anteriores:
  db.query('INSERT INTO registro_pacientes(nombre,apellido,dni) VALUES(?,?,?)', 
    [nombre, apellido, dni],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al crear el paciente");
      } else {
        res.send(result);
      }
    }
  );
};

// Query para listar los datos de la base de datos al front
const getPacientes = (req, res) => {
  db.query('SELECT * FROM registro_pacientes', 
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al obtener los pacientes");
      } else {
        res.send(result);
      }
    }
  );
};

// Query para obtener un paciente específico por ID
const getPacienteById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM registro_pacientes WHERE id = ?', [id], 
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error en el servidor');
      } else if (result.length === 0) {
        res.status(404).send('Paciente no encontrado');
      } else {
        res.send(result[0]);
      }
    }
  );
};

// Actualizar datos de un paciente
const updatePaciente = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, dni } = req.body;

  db.query('UPDATE registro_pacientes SET nombre=?,apellido=?,dni=? WHERE id=?', 
    [nombre, apellido, dni, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al actualizar el paciente");
      } else {
        res.send(result);
      }
    }
  );
};

// Eliminar un paciente
const deletePaciente = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM registro_pacientes WHERE id=?', [id], 
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al eliminar el paciente");
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  createPaciente,
  getPacientes,
  getPacienteById,
  updatePaciente,
  deletePaciente
};
