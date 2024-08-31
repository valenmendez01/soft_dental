const db = require('../db/connection');

  // Actualizar datos de un paciente
const crearAnamnesis = (req, res) => {
  const { id } = req.params;
  const { motivo_consulta, medicamentos, enfermedades, alertas_medicas, atc_odont, atc_familiares, alergias, habitos } = req.body;

  // Verificar existencia del paciente
  db.query('SELECT id FROM registro_pacientes WHERE id = ?', [id], (err, result) => {
      if (err) {
          console.log("Error al verificar el paciente:", err);
          return res.status(500).send("Error al verificar el paciente");
      }

      if (result.length === 0) {
          return res.status(400).send("Paciente no encontrado");
      }

      // Convert arrays to JSON strings or handle them as needed
      const sanitizedValues = [
        id,
        motivo_consulta && motivo_consulta.length > 0 ? JSON.stringify(motivo_consulta) : null,
        medicamentos.length > 0 ? JSON.stringify(medicamentos) : null,
        enfermedades.length > 0 ? JSON.stringify(enfermedades) : null,
        alertas_medicas.length > 0 ? JSON.stringify(alertas_medicas) : null,
        atc_odont.length > 0 ? JSON.stringify(atc_odont) : null,
        atc_familiares.length > 0 ? JSON.stringify(atc_familiares) : null,
        alergias.length > 0 ? JSON.stringify(alergias) : null,
        habitos.length > 0 ? JSON.stringify(habitos) : null
      ];

      // Ejecutar la consulta si el paciente existe
      db.query(
        'INSERT INTO anamnesis(paciente_id, motivo_consulta, medicamentos, enfermedades, alertas_medicas, atc_odont, atc_familiares, alergias, habitos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        sanitizedValues,
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
const getAnamnesis = (req, res) => {
  const { id } = req.params; // Obtener el id del paciente desde los parámetros de la solicitud

  // Consulta SQL para obtener los datos personales usando el paciente_id
  db.query('SELECT * FROM anamnesis WHERE paciente_id = ?', [id], (err, result) => {
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
  const actualizarAnamnesis = (req, res) => {
    const { id } = req.params;
    const { motivo_consulta, medicamentos, enfermedades, alertas_medicas, atc_odont, atc_familiares, alergias, habitos } = req.body;

    // Sanitizar los datos
    const sanitizedValues = [
      motivo_consulta && motivo_consulta.length > 0 ? JSON.stringify(motivo_consulta) : null,
      medicamentos.length > 0 ? JSON.stringify(medicamentos) : null,
      enfermedades.length > 0 ? JSON.stringify(enfermedades) : null,
      alertas_medicas.length > 0 ? JSON.stringify(alertas_medicas) : null,
      atc_odont.length > 0 ? JSON.stringify(atc_odont) : null,
      atc_familiares.length > 0 ? JSON.stringify(atc_familiares) : null,
      alergias.length > 0 ? JSON.stringify(alergias) : null,
      habitos.length > 0 ? JSON.stringify(habitos) : null,
      id
    ];

    db.query('UPDATE anamnesis SET motivo_consulta=?, medicamentos=?, enfermedades=?, alertas_medicas=?, atc_odont=?, atc_familiares=?, alergias=?, habitos=? WHERE paciente_id = ?', 
      sanitizedValues,
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

  // Verificar si existen datos personales para un paciente específico
  const verificarAnamnesis = (req, res) => {
    const { id }= req.params;

    db.query('SELECT COUNT(*) AS count FROM anamnesis WHERE paciente_id = ?',
      [id], 
      (err, result) => {
      if (err) {
        return res.status(500).json({ err: 'Error en la base de datos' });
        }

      const existe = result[0].count > 0;

      res.json({ existenDatos: existe });
      }
    );
  };

module.exports = {
  actualizarAnamnesis,
  crearAnamnesis,
  getAnamnesis,
  verificarAnamnesis
};