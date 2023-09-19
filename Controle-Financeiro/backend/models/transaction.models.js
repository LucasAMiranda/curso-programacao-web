const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
});

module.exports = mongoose.model('Transaction', transactionSchema);