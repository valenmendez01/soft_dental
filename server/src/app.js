/* eslint-disable no-undef */
// Configuración de la aplicación Express

const express = require("express");
const cors = require("cors");
const pacienteRoutes = require('./routes/pacienteRoutes');
const docRecetaRoutes = require('./routes/docRecetaRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", docRecetaRoutes);
app.use("/pacientes", pacienteRoutes);


// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads/logo', express.static('uploads/logo'));
app.use('/uploads/firma', express.static('uploads/firma'));
// app.use('/uploads', express.static('uploads'));


module.exports = app;
