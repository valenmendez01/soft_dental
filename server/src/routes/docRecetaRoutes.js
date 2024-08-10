const express = require("express");
const router = express.Router();
const documentoController = require('../controllers/docRecetaController');
const upload = require('../middleware/uploadMiddleware');

// Ruta para crear o actualizar el documento
router.post("/pacientes/:id/ficha/recetario/upload", upload.single('image'), documentoController.createOrUpdateDocumento);

// Ruta para obtener el documento
router.get("/pacientes/:id/ficha/recetario/", documentoController.getDocumento);

module.exports = router;
