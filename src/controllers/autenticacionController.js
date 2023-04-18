const { comparePasswaord } = require("../helpers");
const usuariosSchema = require("../models/usuariosSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let autenticacionController = {};

autenticacionController.login = async (username, password) => {
  let usuarioBase = await usuariosSchema.findOne({ username: username });

  if (usuarioBase) {
    let comparacion = await comparePasswaord(password, usuarioBase.password);
    if (comparacion) {
      let usuario = {
        username: usuarioBase.username,
        rol: usuarioBase.rol ? usuarioBase.rol : "sin permisos",
      };
      let llave = process.env.SECRET_KEY;
      let token = jwt.sign(usuario, llave, { expiresIn: "300s" });

      return {
        success: true,
        mensaje: "usuario logueado correctamente",
        token,
      };
    } else {
      return { success: false, mensaje: "passsword incorrecto" };
    }
  } else {
    return { success: false, mensaje: "usuario inexistente" };
  }
};

module.exports = autenticacionController;
