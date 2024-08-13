const mysql = require('mysql');

// Conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "soft_dental_database"
});

const uploadImage = (req, res) => {
    const image = req.file.filename;
    const { id } = req.params;
    const sql = "UPDATE recetario SET image = ? WHERE id = ?";
    db.query(sql, [image, id], (err, result) => {
        if(err) return res.status(500).json({Message: "Error"});
        return res.json({Status: "Success"});
    });
};

const getRecetario = (req, res) => {
    const sql = "SELECT * FROM recetario";
    db.query(sql, (err, result) => {
        if(err) return res.json("Error");
        return res.json(result);
    });
};

module.exports = {
    uploadImage,
    getRecetario
};

