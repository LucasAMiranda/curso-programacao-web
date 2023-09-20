const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./database'); // Importe o banco de dados configurado
const cors = require("cors");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Rota para adicionar uma nova transação
app.post('/api/addTransaction', cors(), (req, res) => {
  const { id, description, amount } = req.body;

  // Valide o campo "amount" primeiro
  if (!description || !amount) {
    return res.status(400).json({ error: "Descrição e valor são obrigatórios." });
  }

  if (isNaN(Number(amount))) {
    return res.status(400).json({ error: "O campo amount deve ser um número" });
  }

  if (description.length > 100) {
    return res.status(400).json({ error: "A descrição é muito longa" });
  }
  
  if(!id || typeof id !=='number' || Number.isInteger(id)){
    return  res.status(400).json({error:"O campo id é obrigatório e deve ser um número inteiro"});
  }
  

  // Adicionar a transação no banco de dados
  const transaction = { id, description, amount };
  db.run('INSERT INTO transactions (id, description, amount) VALUES (?, ?, ?)',
    [transaction.id, transaction.description, transaction.amount],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erro ao adicionar transação" });
      }
      res.json({ message: 'Transação adicionada com sucesso' });
    });
});

// Rota para obter todas as transações no formato JSON
app.get('/api/transactions', cors(), (req, res) => {
  db.all('SELECT * FROM transactions', [], (err, transactions) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Erro ao buscar transação" });
    }
    res.json(transactions);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
