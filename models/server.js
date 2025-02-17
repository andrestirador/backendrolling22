const express = require("express");
// importando la configuaracion con la bas de datos
const { dbConnection } = require("../database/config"); // importamos configuracion de coneccion de DB
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // conectar Base de datos
    this.conectarDB();

    // middelwares
    this.middlewares();

    //Rutas llamado
    this.routes();
  }

  // funcion para conectar base de datos
  async conectarDB() {
    await dbConnection();
  }

  //MIDDELWARE - Nos dice donde buscara la pagina principal que s evera en el servidor

  middlewares() {
    // cors
    this.app.use(cors());

    // Lectura y parseo del Body
    this.app.use(express.json());

    // directoro publico
    this.app.use(express.static("public"));
  }

  // RUTAS
  routes() {
    // definimos ruta usuarios
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchand en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
