// Configuración de la aplicación Express

const express = require("express");
const cors = require("cors");
const pacienteRoutes = require('./routes/pacienteRoutes');
const docRecetaRoutes = require('./routes/docRecetaRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use("/", docRecetaRoutes);
app.use("/pacientes", pacienteRoutes);

module.exports = app;
