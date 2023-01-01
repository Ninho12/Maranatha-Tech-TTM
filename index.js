const express = require('express')
const app = express()

// Configurar o EJS como o template engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'Olá, Mundo!' })
});

app.listen(3000, () => {
    console.log('O servidor está rodando na porta 3000')
})