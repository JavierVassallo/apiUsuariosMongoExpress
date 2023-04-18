const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function authenticateToken(req, res, next) {
  let llave = process.env.SECRET_KEY;
  console.log("req.headers", req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ mensjae: "token no enviado" });

  jwt.verify(token, llave, (err, decoded) => {
    if (err)
      return res.status(403).json({ mensjae: "token no valido o caducado" });

    req.jwtDecodificado = decoded;

    next();
  });
}

module.exports = authenticateToken;
