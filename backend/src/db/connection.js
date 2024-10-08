// Configuración de la conexión a la base de datos

// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: import.meta.env.VITE_MYSQLHOST,
//   user: import.meta.env.VITE_MYSQLUSER,
//   password: import.meta.env.VITE_MYSQLPASSWORD,
//   database: import.meta.env.VITE_MYSQLDATABASE,
//   port: import.meta.env.VITE_MYSQLPORT
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error al conectar a la base de datos:", err);
//   } else {
//     console.log("Conectado a la base de datos");
//   }
// });

// module.exports = db;



const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "soft_dental_database"
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conectado a la base de datos");
  }
});

module.exports = db;
