// Punto de entrada principal
// Se corre con: node src/index.jsx

const app = require('./app');
const port = process.env.VITE_PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
