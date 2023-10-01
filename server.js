const express = require("express");
const app = express();
const { db } = require("./db/db");
const PORT = process.env.PORT || 3000;


//middleware 
app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await db.authenticate();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

//msj bienvenida
app.get("/", (req, res) => {
  res.status(200).end("Bienvenido a la API con MySQL y Sequelize");
  });

//router catalogo
const catalogo = require("./routers/catalogo");

app.use("/api", catalogo);

//respuesta ruta inexistente
app.all('/*', async (req, res) => {
  res.status(500).send("Ruta inexistente");
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});




