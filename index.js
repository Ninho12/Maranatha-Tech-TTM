// Importação
const express = require('express')
const Usuario = require('./db/usuarios');

// Usando o Express
const app = express()


// Configurar o EJS como o template engine
app.set('view engine', 'ejs')


// Rota Principal
//app.get('/', (req, res) => {
    //res.render('index', { title: 'Olá, Mundo!' })
//});

// Listar todos os usuarios
app.get('/', (req, res) => {
    Usuario.find({}, (err, users) => {
        if (err) throw err;
        res.send(users);
    });
});

// Adicionar todos os usuarios
app.post('/adicionar', (req, res) => {
    const pessoa = new Usuario({ nome: 'João', email: 'joao@gmail.com' });
    Usuario.save((err, pessoa) => {
        if (err) throw err;
        res.send(pessoa);
    });
});

// Servidor Rodando.
app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000')
})