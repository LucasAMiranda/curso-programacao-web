require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const http = require('http');
const mongoose = require('mongoose');
const requireDir = require("require-dir");

// Iniciar um Database do MongoDB
const mongodbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase"; // Use variável de ambiente ou uma URL local

mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

requireDir("./src/models");

const app = require("./app");
const port = process.env.PORT || 3001;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
