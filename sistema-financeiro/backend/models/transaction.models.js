const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    accountId: {type:mongoose.Schema.Types.ObjectId, ref:'Account'},
});

module.exports = mongoose.model('Transaction', transactionSchema)