const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


const db = mongoose.connection;
console.log('Valor de MONGODB_URI:', db);

db.on('error', (error) => {
  console.error('Erro na conexão com o MongoDB:', error);
});

db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
});

module.exports = db;
