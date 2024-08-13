const express = require("express");
const router = express.Router();
const docRecetaController = require('../controllers/docRecetaController');
const upload = require('../middleware/uploadMiddleware');

// Ruta para crear o actualizar el documento
router.post('/pacientes/:id/ficha/recetario/upload', upload.single('image'), docRecetaController.uploadImage);
//router.post("/pacientes/:id/ficha/recetario/upload", upload.single('image'), documentoController.createOrUpdateDocumento);

// Ruta para obtener el documento
router.get('/', docRecetaController.getRecetario);
//router.get("/pacientes/:id/ficha/recetario/", documentoController.getDocumento);

module.exports = router;
