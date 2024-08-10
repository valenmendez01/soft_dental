// Middleware para manejar la subida de archivos con Multer

const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se almacenarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${path.basename(file.originalname)}`);
    // cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
