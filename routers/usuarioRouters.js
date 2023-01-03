/*
    IMPORTAÇÃO
*/
const Usuario = require('../models/usuarios')
const express = require('express')
const rota = express.Router()

// Importação importante para autenticação
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


/*
    ROTAS PARA MANIPULAÇÃO
    DOS DADOS DOS USUARIOS
    DO SISTEMA.
*/



// Rota privada de usuario
rota.get("/usuario/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const usuario = await Usuario.findById(id, "-password");

  if (!usuario) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}

// CRIANDO USUARIO COM METODO POST
// Rota Publica  de registro
rota.post("/registrar", async (req, res) => {
  const { nome, email, senha, confirmaSenha } = req.body;

  // validations
  if (!nome) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!senha) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  if (senha != confirmaSenha) {
    return res
      .status(422)
      .json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }

  // check if user exists
  const usuarioExiste = await User.findOne({ email: email });

  if (usuarioExiste) {
    return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const senhaHash = await bcrypt.hash(senha, salt);

  // create user
  const usuario = new Usuario({
    nome,
    email,
    senhaHash,
  });

  try {
    await usuario.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// Login para o usuario
rota.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  // check if password match
  const checkSenha = await bcrypt.compare(senha, usuario.senha);

  if (!checkSenha) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});


// LISTANDO TODOS OS USUARIOS
rota.get('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.find()

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
