const { Schema, model, Types } = require("mongoose");
const nodemon = require("nodemon");

// creamo esquema

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El noombe es obligarorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligarorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El password es obligarorio"],
  },
});
