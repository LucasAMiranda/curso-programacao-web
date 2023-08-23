const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/post', async (req, res) => {
    try{
        const response = await axios.get("https://viacep.com.br/ws/57084146/json/");
        const posts = response.data;
        res.json(posts);
    }catch(error){
        res.status(500).json({error: 'Erro interno do Servidor.'})
    }
});

app.listen(port, () => {
    console.log(`Executando no servidor na port: ${port} `)
});