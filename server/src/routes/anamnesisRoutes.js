
const express = require("express");
const router = express.Router();
const anamnesisController = require('../controllers/anamnesisController');

router.get("/:id/ficha/anamnesis", anamnesisController.getAnamnesis);
router.put("/:id/ficha/actualizar-anamnesis", anamnesisController.actualizarAnamnesis);
router.post("/:id/ficha/crear-anamnesis", anamnesisController.crearAnamnesis);
router.get('/:id/ficha/anamnesis/existe-anamnesis', anamnesisController.verificarAnamnesis);

module.exports = router;