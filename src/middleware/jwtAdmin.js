const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function admin(req, res, next) {
  let llave = process.env.SECRET_KEY;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ mensjae: "token no enviado" });

  jwt.verify(token, llave, (err, decoded) => {
    console.log("err", err);

    if (err)
      return res.status(403).json({ mensjae: "token no valido o caducado" });

    req.jwtDecodificado = decoded;
    if (decoded.rol !== "administrador") {
      return res
        .status(403)
        .json({ mensjae: "Este usuario no tiene permisos de administrador" });
    } else {
      next();
    }
  });
}

module.exports = admin;
