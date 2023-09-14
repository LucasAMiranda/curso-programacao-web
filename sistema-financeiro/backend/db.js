const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Erro de conexão com o MongoDB:', error);
});

db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});
