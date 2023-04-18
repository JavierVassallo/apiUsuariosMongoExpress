const helpers = require("../helpers");
const usuariosSchema = require("../models/usuariosSchema");

let usuariosController = {};

/* GET */

usuariosController.obtenerUsuarios = async () => {
  return usuariosSchema.find();
};

usuariosController.obtenerUsuarioByUsername = async (username) => {
  return usuariosSchema.findOne({ username: username });
};

/* POST */

usuariosController.crearUsuario = async (body) => {
  let newBody = { ...body };
  newBody.password = await helpers.hashPass(newBody.password);
  const usuarioNuevo = usuariosSchema(newBody);
  return usuarioNuevo.save();
};

/* PUT  */

usuariosController.actualizarUsuario = async (username, body) => {
  return usuariosSchema.findOneAndUpdate({ username: username }, body);
};

/* DELETE */

usuariosController.eliminarUsuario = async (username) => {
  return usuariosSchema.deleteOne({ username: username });
};

module.exports = usuariosController;
