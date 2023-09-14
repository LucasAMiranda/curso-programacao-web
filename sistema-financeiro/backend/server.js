require('dotenv').config();''
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB usando Mongoose
const db = require('./db');


// Configurações e middlewares do Express
app.use(express.json());

// Rotas e lógica da aplicação aqui...

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
