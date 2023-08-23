const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'crud_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Mysql database');
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render('index', {tasks: results});
    });
});

app.get('/edit/:id', (req, res) => {
    const taskId = req.params.id;
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [taskId], (err, result) =>{
        if (err) throw err;
        res.render('edit', {task:result[0]});
    });
});

app.post('/update/:id', (req, res) => {
    const taskId = req.params.id;
    const {title, description} = req.body;
    const sql = 'UPDATE tasks SET title= ?, description=? WHERE id= ?';
    db.query(sql, [title, description, taskId], (err, result)=>{
        if(err) throw err;
        console.log('Task updated');
        res.redirect('/');
    });
})

app.post('/delete/:id', (req, res)=>{
    const taskId = req.params.id;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [taskId], (err, result) => {
        if (err) throw err;
        console.log('Task deleted');
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
});