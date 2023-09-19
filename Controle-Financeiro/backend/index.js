const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Transaction = require('./models/transaction.models');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear o corpo da requisição no formato JSON 
app.use(express.json());

// Rota para obter todas as transações no formato JSON
app.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar as transações." });
    }
});

// Rota para adicionar uma nova transação
app.post('/transactions', async (req, res) => {
    try {
        const { description, amount } = req.body;
        const transaction = new Transaction({ description, amount });
        await transaction.save();
        res.json(transaction);
    } catch (error) {
        res.status(400).json({ error: "Erro ao adicionar a transação." })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
