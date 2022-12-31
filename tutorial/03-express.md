# Montando um Servidor Express

Neste tutorial vamos montar um servidor
Express em NodeJs.

## Veja o codigo

Perceba que utilizamos o padrão do ES6 para importar o Express, portanto, não podemos esquecer de adicionar o atributo "type": "module" no arquivo package.json, caso contrário teremos um erro de importação.

Agora vamos declarar a constante app e utilizar o método listen() para subir nosso servidor, vamos utilizar a porta 3000. Teremos o seguinte código:

    import express from 'express';

    const app = express();

    app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
    );

Vai roda e vai dar tudo certo.

Porém ao acessar nosso servidor pela porta 3000 (http://localhost:3000/), vamos obter a mensagem “Cannot GET /”, afinal, não configuramos nenhuma rota para a requisição feita pelo navegador.

Para configurar essa rota, vamos utilizar o método get(), que recebe dois parâmetros, a rota e o que vamos retornar nesta requisição (request e response).

    import express from 'express';

    const app = express();

    app.listen(3000, () => 
        console.log('Servidor iniciado na porta 3000')
    );

    app.get('/', (req, res) => 
    res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1>')
    );


## Criando Rotas no Express (GET)

Agora precisamos criar a rota raiz, pra isso vamos utilizar o método (ou verbo) get, caso contrário ao entrarmos em localhost:3000 (endereço de nosso servidor local), vamos obter a seguinte mensagem no navegador: Cannot GET /.

Por isso vamos começar pelo get. O Express permite o uso dos métodos (verbos) HTTP de maneira muito simples, neste caso vamos utilizar o método app.get():

    import Express from 'Express';

    const app = Express();

    app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
    );

    app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
    );

Como podemos ver, utilizamos o método get seguindo o primeiro parâmetro, onde apontamos a rota. Logo em seguida, passamos uma arrow function, que recebe uma request e um response, com o response podemos usar o método send e exibir o conteúdo que desejamos, neste caso, uma mensagem em formato HTML, porém no response você poderia passar um JSON por exemplo.

Nós podemos, por exemplo, criar outras rotas de acordo com a necessidade da sua aplicação, como uma página sobre, desta forma, utilizando a rota /sobre:

    import Express from 'Express';

    const app = Express();

    app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
    );

    app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
    );

    app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
    );

Utilizando a mesmo conceito do método app.get(), criamos a rota /sobre, com um conteúdo diferente da rota principal:


Nós podemos também receber parâmetro pela URL usando o método get, para isso precisamos, no momento de configurar a rota, utilizar :parametro, onde ‘:’ é o que caracteriza a variável que vamos usar, conforme exemplo abaixo:

    import Express from 'Express';

    const app = Express();

    app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
    );

    app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
    );

    app.get('/users/:name', (req, res) => //recebe o parâmetro name
        res.send('Usuário:' + req.params.name) //exibe o parametro name
    );

    app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
    );


## Rotas do Metodo POST

Antes de tudo para exemplificar uma rota com express utilizando post vamos criar um array, vamos chamar esse array de carros e criar uma lista com o nome de carros aleatórios:

    var carros = ['fiesta', 'saveiro'];

Em seguida vamos criar uma rota GET para consultar os dados deste array, utilizando o índice do vetor para acessar o valor de cada item do vetor, da seguinte forma:

    app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
    });

Que corresponde ao índice 0 de nosso array.

Agora vamos cadastrar novos carros em nosso array utilizando o verbo POST, no Express podemos facilmente utilizar junto ao método app.post(). Então vamos criar uma rota e enviar o nome do novo carro pela requisição post da seguinte forma:

Vamos adicionar a seguinte linha após a declaração do array.

    app.use(Express.urlencoded({ extended: true }));

E então, utilizar o método app.post();

    app.post('/cars/', (req, res) => {
        let name = req.body.name;
        carros[(carros.length)] = name;
        return res.json([carros[(carros.length - 1)]]);
    });

Para ver o resultado precisamos ver no programa chamado isominia para ver resultado de uma api.

No final o codigo fica assim:

    import Express from 'Express';

    const app = Express();

    var carros = ['fiesta', 'saveiro'];

    app.use(Express.urlencoded({ extended: true }));

    app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
    );

    app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
    );

    app.get('/users/:name', (req, res) =>{
        return res.json([name]);
    });

    app.post('/cars/', (req, res) => {
        let name = req.body.name;
        carros[(carros.length)] = name;
        return res.json([carros[(carros.length - 1)]]);
    });

    app.get('/cars/:id', (req, res) => {
        let id = req.params.id;
        return res.json([carros[id]])
    }); 

    app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
    );

Não vamos aprender todos os tipos de rotas porque o tempo não dar mas em um proximo tutorial de como criar uma api no Node aprederemos todos os tipos de rotas: GET, POST, PUT e Delete.

## Conclução

Concluimos que para trabalhar com Node e Express precisamos criar Rotas que pode ser do tipo: get, post, put e delete que são as 4 operações que fazemos no banco de dados.






