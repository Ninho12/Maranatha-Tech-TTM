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


## Criando Rotas no Express



