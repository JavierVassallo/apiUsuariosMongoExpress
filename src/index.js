const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

/* routes */

const routerUsuarios = require("./routes/usuarios");
require("./database/database.js");
app.set("PORT", process.env.PORT || 5005);

app.use(cors());
app.use(express.json());
app.use(routerUsuarios);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});
