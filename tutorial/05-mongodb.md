# Tudo sobre o MongoDB

Vamos aprender da maneira mais facil criar se conectar a um banco de dados MongoDB.

## Arquivo de Conexão

Vamos crir um arquivo de conexão: conexão.js

    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB:'));
    db.once('open', () => {
    console.log('Conectado ao MongoDB com sucesso');
    });

Com esse codigo.

## Criar um esquema

Crie um esquema de modelo para os documentos que você deseja armazenar no banco de dados:

    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
    name: String,
    email: String
    });

    const User = mongoose.model('User', UserSchema);

## Usando o get e o post

    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) throw err;
        res.send(users);
    });
    });

    app.post('/add', (req, res) => {
    const user = new User({ name: 'John', email: 'john@example.com' });
    user.save((err, user) => {
        if (err) throw err;
        res.send(user);
    });
    });

    app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
    });

No exemplo acima, estamos usando o método find() do modelo User para encontrar todos os usuários no banco de dados e o método save() para adicionar um novo usuário.

## Importar e Exportar

Para exportar um arquivo JavaScript no Node.js e importá-lo em outro arquivo, você pode usar o module.exports e o require().

Por exemplo, suponha que você tenha um arquivo arquivo1.js com o seguinte conteúdo:

    const greeting = 'Olá';

    module.exports = greeting;

Para importar esse arquivo em outro arquivo, basta usar o require():

    const greeting = require('./arquivo1');

    console.log(greeting); // "Olá"

