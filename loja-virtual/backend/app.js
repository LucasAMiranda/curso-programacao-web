const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const cors = require("cors");


const rotaProdutos = require("./routes/produtos");

const rotaPedidos = require("./routes/pedidos");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples.
app.use(bodyParser.json()); //fornece dados no formato json no body.

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado os dados da api");
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;