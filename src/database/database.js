const mongoose = require("mongoose");

let mongoUri =
  "mongodb+srv://javiervassallo55:cagWginkF4KzIRli@cluster0.e1rtajk.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB conectada");
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });

//despues del .net/nombreBaseALaQueConectar?retry
