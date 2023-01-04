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

## delete e patch

João Paulo Sena Padilha
faça um resumo em markdown do template engine handlebars

O Handlebars é um template engine para JavaScript que permite que você crie templates HTML estruturados de forma mais fácil e rápida. Ele utiliza marcações chamadas expressões handlebars para inserir dados dinâmicos em suas páginas HTML.

Por exemplo, se você tiver uma variável chamada nome com o valor "João", pode usar uma expressão handlebars para exibi-la na página HTML assim:

<p>Olá, meu nome é {{nome}}.</p>

Ao processar o template, o Handlebars substituirá a expressão pelo valor da variável, produzindo o seguinte HTML:

<p>Olá, meu nome é João.</p>

O Handlebars também oferece recursos como laços e condicionais, permitindo que você crie templates mais complexos. Ele é compatível com a maioria dos navegadores e pode ser usado tanto no lado do cliente quanto no lado do servidor.
João Paulo Sena Padilha
fale mais sobre laços e condicionais

Com o Handlebars, é possível usar laços para iterar sobre um array de dados e exibir um template para cada item do array. Isso é útil quando você quer exibir uma lista de itens de forma dinâmica.

Por exemplo, suponha que você tenha um array chamado produtos com os seguintes itens:

[
  {nome: "Produto 1", preco: 9.99},
  {nome: "Produto 2", preco: 19.99},
  {nome: "Produto 3", preco: 29.99}
]

Você pode usar um laço handlebars para exibir uma lista desses produtos assim:

<ul>
  {{#each produtos}}
    <li>{{nome}} (R$ {{preco}})</li>
  {{/each}}
</ul>

O resultado seria a seguinte lista HTML:

<ul>
  <li>Produto 1 (R$ 9.99)</li>
  <li>Produto 2 (R$ 19.99)</li>
  <li>Produto 3 (R$ 29.99)</li>
</ul>

Além de laços, o Handlebars também permite que você use condicionais para exibir ou esconder partes do template baseado em certas condições. Por exemplo:

{{#if mostrarMensagem}}
  <p>Essa é uma mensagem importante!</p>
{{/if}}

Nesse exemplo, se a variável mostrarMensagem tiver o valor true, a mensagem será exibida. Se tiver o valor false, ela será ignorada.

Esses são apenas alguns exemplos de como o Handlebars pode ajudar você a criar templates HTML de forma mais fácil e rápida. Ele oferece muitas outras opções e recursos para ajudá-lo a criar templates mais complexos e personalizados.
João Paulo Sena Padilha
vale sobre o else

Sim, o Handlebars também oferece a opção de usar um bloco else junto com um condicional if. Isso permite que você especifique o que deve ser exibido caso a condição não seja atendida.

Por exemplo:

{{#if mostrarMensagem}}
  <p>Essa é uma mensagem importante!</p>
{{else}}
  <p>Não há mensagens importantes no momento.</p>
{{/if}}

Nesse exemplo, se a variável mostrarMensagem tiver o valor true, a primeira mensagem será exibida. Se tiver o valor false, a segunda mensagem será exibida.

Você também pode usar múltiplos blocos else if para testar várias condições diferentes:

{{#if mostrarMensagem}}
  <p>Essa é uma mensagem importante!</p>
{{else if outraCondicao}}
  <p>Essa é outra mensagem importante!</p>
{{else}}
  <p>Não há mensagens importantes no momento.</p>
{{/if}}

Nesse caso, se a variável mostrarMensagem tiver o valor true, a primeira mensagem será exibida. Se tiver o valor false e a variável outraCondicao tiver o valor true, a segunda mensagem será exibida. Se ambas tiverem o valor false, a terceira mensagem será exibida.
João Paulo Sena Padilha
exemplo de delete e patch no mongoose do node

Aqui estão alguns exemplos de como usar os métodos deleteOne() e updateOne() do Mongoose para apagar e atualizar documentos em uma coleção do MongoDB usando o Node.js:

    const mongoose = require('mongoose');

    // Conecte-se ao banco de dados
    mongoose.connect('mongodb://localhost/meuBancoDeDados', {useNewUrlParser: true});

    // Crie um modelo de produto
    const Produto = mongoose.model('Produto', {
    nome: String,
    preco: Number
    });

    // Use o método deleteOne() para apagar um documento da coleção
    Produto.deleteOne({nome: 'Produto 1'}, function(erro) {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Produto apagado com sucesso!');
    }
    });

    // Use o método updateOne() para atualizar um documento da coleção
    Produto.updateOne({nome: 'Produto 2'}, {preco: 24.99}, function(erro) {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Produto atualizado com sucesso!');
    }
    });

Esses exemplos apagarão o primeiro documento da coleção que tiver o nome 'Produto 1' e atualizarão o primeiro documento da coleção que tiver o nome 'Produto 2', alterando o preço para 24.99.

Você também pode usar os métodos deleteMany() e updateMany() se quiser apagar ou atualizar mais de um documento de uma vez.


## Importar e Exportar

Para exportar um arquivo JavaScript no Node.js e importá-lo em outro arquivo, você pode usar o module.exports e o require().

Por exemplo, suponha que você tenha um arquivo arquivo1.js com o seguinte conteúdo:

    const greeting = 'Olá';

    module.exports = greeting;

Para importar esse arquivo em outro arquivo, basta usar o require():

    const greeting = require('./arquivo1');

    console.log(greeting); // "Olá"

