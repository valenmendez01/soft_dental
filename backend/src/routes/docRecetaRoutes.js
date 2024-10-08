const express = require("express");
const router = express.Router();
const docRecetaController = require('../controllers/docRecetaController');
const upload = require('../middleware/uploadMiddleware');

// Ruta para crear o actualizar el documento
router.post('/pacientes/:id/ficha/recetario/upload', upload.fields([
    { name: 'imageLogo', maxCount: 1 },
    { name: 'imageFirma', maxCount: 1 }
  ]), docRecetaController.uploadImage);

// Ruta para obtener el documento
router.get('/pacientes/:id/ficha/recetario', docRecetaController.getRecetario);

module.exports = router;
