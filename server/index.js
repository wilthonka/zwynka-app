

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Zwynka Backend funcionando");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(4000, () => console.log("Servidor corriendo en puerto 4000"));
  })
  .catch((err) => console.error("Error de conexión a MongoDB:", err));




