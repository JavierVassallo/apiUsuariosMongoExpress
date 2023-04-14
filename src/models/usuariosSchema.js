const mongoose = require("mongoose");
const { Schema } = mongoose;
// Creamos la estructura de un tipo de documento (users)
const usuariosSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  fechaCreacion: { type: Date, default: Date.now },
  rol: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Como primer parametro, va el nombre de la coleccion
module.exports = mongoose.model("usuarios", usuariosSchema);
