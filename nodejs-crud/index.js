const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM addresses';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('index', { addresses: results });
    });
});

app.post('/add', async (req, res) => {
    const { cep } = req.body;
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const addressData = response.data;
        
        const { logradouro, bairro, localidade, uf } = addressData;

        const sql = 'INSERT INTO addresses (logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?)';
        db.query(sql, [logradouro, bairro, localidade, uf], (err, result) => {
            if (err) throw err;
            console.log('Address added');
            res.redirect('/');
        });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

app.get('/edit/:id', (req, res) => {
    const addressId = req.params.id;
    const sql = 'SELECT * FROM address WHERE id = ?';
    db.query(sql, [addressId], (err, resul) => {
        if(err) throw err;
        res.render('edit', {address: result[0]});
    });
});

app.put('update/:id', (req, res) => {
    const addressId = req.params.id;
    const sql = 'UPDATE addresses SET logradouro = ?, bairro= ?, localidade=?, uf=? WHERE id=?';
    db.query(sql, [addressId], (err, result) => {
        if (err) throw err;
        console.log('Address deleted');
     res.redirect('/');
    });

});

app.post('/delete/:id', (req, res) => {
    const addressId = req.params.id;
    const sql = 'DELETE FROM addresses WHERE id = ?';
    db.query(sql, [addressId], (err, result) => {
        if (err) throw err;
        console.log('Address deleted');
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
