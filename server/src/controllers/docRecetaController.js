/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// Conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "soft_dental_database"
});

const uploadImage = (req, res) => {
    const { nombre, matricula, direccion, whatsapp } = req.body;

    // Obtener los nombres de los archivos subidos, si están presentes
    const logo = req.files['imageLogo'] ? req.files['imageLogo'][0].filename : undefined;
    const firma = req.files['imageFirma'] ? req.files['imageFirma'][0].filename : undefined;

    // Consultar los datos actuales para obtener los nombres de los archivos existentes
    db.query('SELECT logo, firma FROM recetario', (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ status: 'error', message: 'Error al obtener los datos' });
        }

        // Usar los nombres de archivo existentes si no se han cargado nuevos archivos
        const existingLogo = rows[0].logo;
        const existingFirma = rows[0].firma;

        // Eliminar el archivo antiguo si hay uno y se está cargando uno nuevo
        if (logo !== undefined && existingLogo) {
            const oldLogoPath = path.join(__dirname, '..', '..', 'uploads', 'logo', existingLogo);
            if (fs.existsSync(oldLogoPath)) {
                fs.unlink(oldLogoPath, (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo antiguo de logo:', err);
                    } else {
                        console.log('Archivo de logo antiguo eliminado exitosamente.');
                    }
                });
            } else {
                console.log('El archivo antiguo de logo no existe.');
            }
        }

        if (firma !== undefined && existingFirma) {
            const oldFirmaPath = path.join(__dirname, '..', '..', 'uploads', 'firma', existingFirma);
            if (fs.existsSync(oldFirmaPath)) {
                fs.unlink(oldFirmaPath, (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo antiguo de firma:', err);
                    } else {
                        console.log('Archivo de firma antiguo eliminado exitosamente.');
                    }
                });
            } else {
                console.log('El archivo antiguo de firma no existe.');
            }
        }

        const logoToUpdate = logo !== undefined ? logo : existingLogo;
        const firmaToUpdate = firma !== undefined ? firma : existingFirma;

        // Actualizar la base de datos
        db.query(
            'UPDATE recetario SET nombre = ?, matricula = ?, direccion = ?, whatsapp = ?, logo = ?, firma = ?',
            [nombre, matricula, direccion, whatsapp, logoToUpdate, firmaToUpdate],
            (err, result) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ status: 'error', message: 'Error al guardar los datos' });
                }
                res.json({ status: 'success', message: 'Datos guardados exitosamente' });
            }
        );
    });
};

const getRecetario = (req, res) => {
    db.query('SELECT * FROM recetario', (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ status: 'error', message: 'Error al obtener los datos' });
        }
        if (rows.length === 0) {
            return res.status(404).json({ status: 'error', message: 'No se encontraron datos' });
        }
        res.json(rows[0]);
    });
};

module.exports = {
    uploadImage,
    getRecetario
};

