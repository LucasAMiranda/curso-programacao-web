const express = require("express");

const routes = express.Router();

const PedidoController = require("../controllers/PedidoController");

//RETORNA DADOS DOS PEDIDOS
routes.get("/", PedidoController.listarPedidos);

//INSERIR UM PEDIDO
routes.post("/", PedidoController.inserirPedido);

//RETORNA DADOS DE UM PEDIDO
routes.get("/:id", PedidoController.mostrarPedido);

//DELETAR PEDIDO
routes.delete("/:id", PedidoController.destroy);

module.exports = routes