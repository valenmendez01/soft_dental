const db = require('../db/connection');

  // Actualizar datos de un paciente
const crearPaciente = (req, res) => {
  const { id } = req.params;
  const { fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numeroOs } = req.body;

  // Verificar existencia del paciente
  db.query('SELECT id FROM registro_pacientes WHERE id = ?', [id], (err, result) => {
      if (err) {
          console.log("Error al verificar el paciente:", err);
          return res.status(500).send("Error al verificar el paciente");
      }

      if (result.length === 0) {
          return res.status(400).send("Paciente no encontrado");
      }

      // Insertar en datos_personales si el paciente existe
      db.query(
          'INSERT INTO datos_personales(paciente_id, fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numeroOs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [id, fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numeroOs],
          (err, result) => {
            if (err) {
              console.error("Error al crear los datos personales del paciente:", err);
              return res.status(500).send("Error al crear los datos personales del paciente");
            } else {
                res.send({ message: "Datos personales creados exitosamente", result });
            }
          }
      );
  });
};

// Query para listar los datos de la base de datos al front
const getDatosPersonales = (req, res) => {
  const { id } = req.params; // Obtener el id del paciente desde los parámetros de la solicitud

  // Consulta SQL para obtener los datos personales usando el paciente_id
  db.query('SELECT * FROM datos_personales WHERE paciente_id = ?', [id], (err, result) => {
    if (err) {
      console.error("Error al obtener los datos personales del paciente:", err);
      return res.status(500).send("Error al obtener los datos personales del paciente");
    }

    if (result.length === 0) {
      return res.status(404).send("Datos personales no encontrados para este paciente");
    }

    res.send(result); // Enviar los datos personales obtenidos
  });
};


  // Actualizar datos de un paciente
  const actualizarDatosPersonales = (req, res) => {
    const { id } = req.params;
    const { fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numero_os } = req.body;

    db.query('UPDATE datos_personales SET fecha=?, sexo=?, celular=?, direccion=?, cp=?, localidad=?, civil=?, ocupacion=?, email=?, obrasocial=?, numeroOs=? WHERE paciente_id = ?', 
      [fecha, sexo, celular, direccion, cp, localidad, civil, ocupacion, email, obrasocial, numero_os, id],
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

module.exports = {
  actualizarDatosPersonales,
  crearPaciente,
  getDatosPersonales
};