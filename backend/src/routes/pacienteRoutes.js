// Rutas relacionadas con pacientes

const express = require("express");
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.post("/create", pacienteController.createPaciente);
router.get("/", pacienteController.getPacientes);
router.get("/:id", pacienteController.getPacienteById);
router.put("/:id/update", pacienteController.updatePaciente);
router.delete("/delete/:id", pacienteController.deletePaciente);

module.exports = router;
