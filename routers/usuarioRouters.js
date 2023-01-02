/*
    IMPORTAÇÃO
*/
const Usuario = require('../models/usuarios')
const express = require('express')
const rota = express.Router()

/*
    ROTAS PARA MANIPULAÇÃO
    DOS DADOS DOS USUARIOS
    DO SISTEMA.
*/

// CRIANDO USUARIO COM METODO POST
rota.post('/usuario', async (req, res) => {
  const { nome, email, senha } = req.body

  const usuario = {
    nome,
    email,
    senha,
  }
  
  try {
    await Usuario.create(usuario)

    res.status(201).json({ message: 'Usuario inserido no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})


// LISTANDO TODOS OS USUARIOS
rota.get('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.find()

    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// MOSTRANDO APENAS UM USUARIO
rota.get('/usuario/:id', async (req, res) => {
  const id = req.params.id

  try {
    const usuario = await Usuario.findOne({ _id: id })

    if (!usuario) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})


// PATCH É PARA ATUALIZAR TODO O CONTEUDO DO 
// MODELO, NO CASO O MODELO USUARIO
rota.patch('/usuario/:id', async (req, res) => {
  const id = req.params.id

  const { nome, email, senha } = req.body

  const usuario = {
    nome,
    email,
    senha,
  }

  try {
    const atualizaUsuario = await Usuario.updateOne({ _id: id }, usuario)

    if (atualizaUsuario.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})


// DELETANDO UM USUARIO
rota.delete('/usuario/:id', async (req, res) => {
  const id = req.params.id

  const usuario = await Usuario.findOne({ _id: id })

  if (!usuario) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Usuario.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// EXPORTANDO AS ROTAS DO O USUARIO
module.exports = rota
