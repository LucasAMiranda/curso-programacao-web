const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/transaction.models'); // Certifique-se de que o caminho esteja correto
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Rota para criar uma nova transação
app.post('/api/transaction', async (req, res) => {
  try {
    const transactionData = req.body; // Dados do formulário enviado

    // Crie uma nova instância do modelo Transaction com os dados
    const newTransaction = new Transaction(transactionData);

    // Salve a transação no MongoDB
    await newTransaction.save();

    // Responda com sucesso
    res.status(201).json({ message: 'Transação criada com sucesso' });
  } catch (error) {
    console.error('Erro ao criar a transação:', error);
    res.status(500).json({ message: 'Erro ao criar a transação' });
  }
});

app.listen(port, () =>{
  console.log(`Servido rodando na porta ${port}`)
})
