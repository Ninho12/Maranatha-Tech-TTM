// Importação
const express = require('express')
const exphbs  = require('express-handlebars');

const rotasUsuario = require('./routers/usuarioRouters')

// Usando o Express
const app = express()


// Configure o Handlebars como o engine de templates
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Rotas principal de views
app.get('/', (req, res) => {
    res.render("home", nome)
})


// Comandos para trabalhar com Json
app.use(
    express.urlencoded({
      extended: true,
    }),
)  
app.use(express.json())

// Rota Principal json
app.get('/json', (req, res) => {
    res.json({ message: 'Oi Express!' })
})

// Carregando as rotas do Usuario
app.use('/api/v1/', rotasUsuario)

  

// Servidor Rodando.
app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000')
})