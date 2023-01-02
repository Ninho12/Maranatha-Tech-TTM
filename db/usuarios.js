// Importar o que precisa
const mongoose = require('./conexao');

const Schema = mongoose.Schema;

const EsquemaUsuario = new Schema({
    
    nome: String,
    email: String

});

const Usuario = mongoose.model('User', EsquemaUsuario);

// Exportar o arquivo
module.exports = Usuario;