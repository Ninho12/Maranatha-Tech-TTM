// Arquivo responsavel pela 
// conexão com o banco de dados.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso');
});

// Exportar o arquivo
module.exports = mongoose;
