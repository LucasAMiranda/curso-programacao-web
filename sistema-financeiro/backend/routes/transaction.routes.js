const express = require("express");
const router = express.Router();
const Transaction = require('../models/transaction.models');

//Rota para criar uma nova transação

router.post("/", async (req, res) => {
    try{
        const { description, amount, date, accountId} = req.body;
        const transaction = new Transaction({description, amount, date, accountId});
        await transaction.save();
        res.status(201).json(transaction);
    }catch(error){
        res.status(500).json({error: 'Erro ao criar a transação'});
    }
});

module.exports = router;