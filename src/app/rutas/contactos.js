const conn = require('../../config/dbserver');
module.exports = (app) => {
    app.get("/contacto", (req, res, next) => {
        let query = "SELECT id, nombre, apellido, correo, telefono FROM contacto";
        conn.query(query, (err, contactos, cols) => {
            if (err) res.status(500).json({status:0, respuesta:"No pudo obtenerse informacion"});
            else res.json({status:1, respuesta:"Se obtuvieron los datos satisfactoriamente", contactos});
        });
    });

    app.get("/contacto/:id", (req, res, next) => {
        let query = `SELECT id, nombre, apellido, correo, telefono FROM contacto WHERE id = ${req.params.id}`;
        conn.query(query, (err, contactos, columnas) => {
            if (err) res.status(500).json({status:0, respuesta:"No se pudo conectar al servidor"});
            else if (contactos.length > 0) res.json({status:1, respuesta:"Se obtuvo el dato", contacto: contactos[0]});
            else res.status(404).json({status:0, respuesta: "No se encontro ese id"});
        });
    });

    app.post("/contacto", (req, res, next) => {
        let query = `INSERT INTO contacto (nombre, apellido, correo, telefono) VALUES ` +
        `('${req.body.nombre}', '${req.body.apellido}', '${req.body.correo}','${req.body.tel}')`
        conn.query(query, (err) => {
            if (err) res.status(500).json({status:0, respuesta:"No se pudo insertar el valor"});
            else res.json({status: 1, respuesta:"Se inserto satisfactoriamente"});
        });
    });

    app.get("/suma/:op1/:op2", (req, res, next) => {
        res.json({resultado : parseInt(req.params.op1) + parseInt(req.params.op2)});
    });
}