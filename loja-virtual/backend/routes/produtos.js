const express = require("express");

const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

//RETORNA TODOS OS PRODUTOS 
router.get("/", ProdutoController.listarProdutos);

//INSERE UM PRODUTO
router.post("/", ProdutoController.inserirProduto);

//RETORNA DADOS DE UM PRODUTO
router.get("/:id", ProdutoController.mostrarProduto);

//ALTERA PRODUTO
router.put("/:id", ProdutoController.update);

//DELETA PRODUTO
router.delete("/:id", ProdutoController.destroy);

module.exports = router;
