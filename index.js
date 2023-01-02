// Importação
const express = require('express')
const rotasUsuario = require('./routers/usuarioRouters')

// Usando o Express
const app = express()


// Configurar o EJS como o template engine
// app.set('view engine', 'ejs')


// Comandos para trabalhar com Json
app.use(
    express.urlencoded({
      extended: true,
    }),
)  
app.use(express.json())

// Rota Principal
app.get('/', (req, res) => {
    res.json({ message: 'Oi Express!' })
})

// Carregando as rotas do Usuario
app.use('/api/v1/', rotasUsuario)

  

// Servidor Rodando.
app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000')
})