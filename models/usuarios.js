// Importar o que precisa
const mongoose = require('./conexao');

const Schema = mongoose.Schema;

const EsquemaUsuario = new Schema({
    
    nome: String,
    email: String,
    senha: String

});

const Usuario = mongoose.model('Usuario', EsquemaUsuario);

// Exportar o arquivo
module.exports = Usuario;