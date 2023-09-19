const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {
    console.log("Conexão com MongoDB foi estabelecida com sucesso!");
})
.catch((err) => {
    console.log("Erro  na conexão com o MongoDB: ", err);
});