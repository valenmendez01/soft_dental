// se corre con node index.js

const express = require("express");
const app = express();

app.listen(3001,() => {
  console.log("corriendo en puerto 3001")
});