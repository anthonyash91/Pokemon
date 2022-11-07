const mongoose = require('mongoose')

const monsterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regionalForm: { type: String, required: false },
  primaryType: { type: String, required: true },
  secondaryType: { type: String, required: false },
  species: { type: String, required: true },
  region: { type: String, required: true },
  image: { type: String, required: true },
  entry: { type: String, required: true },
  evolutionType: { type: String, required: false },
  hasBeenCaught: { type: String, required: true }
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster