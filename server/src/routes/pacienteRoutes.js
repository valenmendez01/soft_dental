// Rutas relacionadas con pacientes

const express = require("express");
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const datosPersonalesController = require('../controllers/datosPersonalesController');

router.post("/create", pacienteController.createPaciente);
router.get("/", pacienteController.getPacientes);
router.get("/:id", pacienteController.getPacienteById);
router.put("/:id/update", pacienteController.updatePaciente);

router.get("/:id/datos-personales", datosPersonalesController.getDatosPersonales);
router.put("/:id/actualizar-datos-personales", datosPersonalesController.actualizarDatosPersonales);
router.post("/:id/crear", datosPersonalesController.crearPaciente);
router.delete("/delete/:id", pacienteController.deletePaciente);

module.exports = router;
