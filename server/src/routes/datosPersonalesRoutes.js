
const express = require("express");
const router = express.Router();
const datosPersonalesController = require('../controllers/datosPersonalesController');

router.get("/:id/datos-personales", datosPersonalesController.getDatosPersonales);
router.put("/:id/actualizar-datos-personales", datosPersonalesController.actualizarDatosPersonales);
router.post("/:id/crear", datosPersonalesController.crearPaciente);
router.get('/:id/datos-personales/existen', datosPersonalesController.verificarDatosPersonales);

module.exports = router;