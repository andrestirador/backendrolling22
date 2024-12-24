const Server = require("./models/server.js");

require("dotenv").config();

// Creamos la Instancia

const server = new Server();

server.listen();

//const express = require("express");

//const app = express();
//llamamos a variabe de entorno .env
//const port = process.env.PORT;

// Ruta
//app.get("/", (req, res) => {
//  res.json({
//    msg: "Mi Primer Servidor!",
//  });
//});

//app.listen(port, () => {
//  console.log(`Escuchand en el puerto ${port}`);
//});
