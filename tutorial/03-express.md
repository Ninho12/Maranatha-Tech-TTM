# Express Framework NodeJs

Esse framework é muito bom para construção de sites e apis em NodeJs.

## Como montar um servidor

Antes de tudo presissamos instalar o express

    npm install express --save

Esse comando instala o express no projeto.

Como montar um servidor simples no Node usando o Express:


    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
    });

    app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
    });

Pronto com esse codigo simples já temos um servidor simples rodando no Node.

## Usando o template engine EJS

    const express = require('express');
    const app = express();

    // Configurar o EJS como o template engine
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
    res.render('index', { title: 'Olá, Mundo!' });
    });

    app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000');
    });

Nesse exemplo, estamos configurando o EJS como o template engine usando a chamada app.set('view engine', 'ejs'). Depois, na rota raiz (/), estamos renderizando a visualização index e passando um título para ela.

Precisamos também insalar o modulo ejs no node.

    npm install ejs --save

Pronto agora vai funcionar.

Depois, você pode criar suas visualizações usando o EJS em arquivos com a extensão .ejs na pasta views. Por exemplo, para a visualização index acima, você pode criar um arquivo views/index.ejs com o seguinte conteúdo:

    <!DOCTYPE html>
    <html>
    <head>
        <title><%= title %></title>
    </head>
    <body>
        <h1><%= title %></h1>
    </body>
    </html>

Pronto isso é tudo do express e engine ejs.
