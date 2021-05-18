const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const planetSchema = new Schema({
  nome: {type: String, required: true},
  clima: {type: String, required: false},
  terreno: {type: String, required: false},
  qtdFilmes: {type: String, required: false}

});

module.exports = mongoose.model('Planet', planetSchema )