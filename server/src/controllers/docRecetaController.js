const db = require('../db/connection.js');

const createOrUpdateDocumento = (req, res) => {
  const { titulo, descripcion } = req.body;
  const archivo = req.file ? req.file.filename : null;

  // Verifica si ya existe una fila en la tabla
  db.query('SELECT COUNT(*) AS count FROM receta', (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error al verificar la existencia del documento");
    }

    if (result[0].count > 0) {
      // Si existe, actualiza la fila
      db.query('UPDATE receta SET titulo=?, descripcion=?, archivo=? WHERE id=1', 
        [titulo, descripcion, archivo],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error al actualizar el documento");
          } else {
            res.json({ message: "Documento actualizado correctamente" });
          }
        }
      );
    } else {
      // Si no existe, inserta una nueva fila
      db.query('INSERT INTO receta(titulo, descripcion, archivo) VALUES(?, ?, ?)', 
        [titulo, descripcion, archivo],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error al crear el documento");
          } else {
            res.json({ message: "Documento creado correctamente" });
          }
        }
      );
    }
  });
};

const getDocumento = (req, res) => {
  db.query('SELECT * FROM receta', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al obtener el documento");
    } else if (result.length === 0) {
      res.status(404).send('Documento no encontrado');
    } else {
      res.send(result[0]);
    }
  });
};

module.exports = {
  createOrUpdateDocumento,
  getDocumento,
};
