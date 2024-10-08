// Middleware para manejar la subida de archivos con Multer

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = '';
    if (file.fieldname === 'imageLogo') {
      folder = 'uploads/logo/'; // Carpeta donde se almacenarán los archivos
    } else if (file.fieldname === 'imageFirma') {
      folder = 'uploads/firma/'; // Carpeta donde se almacenarán los archivos
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
