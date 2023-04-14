const express = require("express");
const usuariosController = require("../../controllers/usuariosController");

const router = express.Router();

router.get("/usuarios", async (req, res) => {
  try {
    let respuesta = await usuariosController.obtenerUsuarios();
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.get("/usuarioByUsername", async (req, res) => {
  let username = req.query.username;
  try {
    let respuesta = await usuariosController.obtenerUsuarioByUsername(username);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.post("/usuario", async (req, res) => {
  let body = req.body;
  try {
    let respuesta = await usuariosController.crearUsuario(body);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.put("/usuario", async (req, res) => {
  let username = req.query.username;
  let body = req.body;
  try {
    let respuesta = await usuariosController.actualizarUsuario(username, body);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.delete("/usuario", async (req, res) => {
  let username = req.body.username;
  try {
    let respuesta = await usuariosController.eliminarUsuario(username);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;
