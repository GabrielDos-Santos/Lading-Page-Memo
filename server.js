const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");

const mailRoutes = require("./routes/mailRoutes"); 

const app = express();
const PORT = 3000;

const SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // chave de teste

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public")); 


// Importar rotas

app.use("/", mailRoutes); 

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});