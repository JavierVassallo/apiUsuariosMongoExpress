const express = require("express");

const autenticacionController = require("../../controllers/autenticacionController");

const router = express.Router();

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    let respuesta = await autenticacionController.login(username, password);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;
