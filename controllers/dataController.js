const Monster = require('../models/monster')

const dataController = {
  index (req, res, next) {
    let filterKey

    const filters = {
      region: ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'hisui', 'paldea'],
      hasBeenCaught: ['caught', 'uncaught'],
      primaryType: ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
    }

    const options = {}

    for (const property in filters) {
      const compare = filters[property].includes(req.params.category)

      if (compare) {
        filterKey = property
      }
    }

    if (filterKey === 'primaryType') {
      options.$or = [{ primaryType: req.params.category }, { secondaryType: req.params.category }]
    } else {
      options[filterKey] = req.params.category
    }

    Monster.find(options, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.category = req.params.category
        res.locals.data.pageType = req.route.path.split('/')[1]
        res.locals.data.monsters = foundMonsters
        res.locals.data.number = foundMonsters.length
        res.locals.data.indexPage = req.route.path
        next()
      }
    })
  },
  destroy (req, res, next) {
    Monster.findByIdAndDelete(req.params.id, (err, deletedMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monster = deletedMonster
        next()
      }
    })
  },
  update (req, res, next) {
    Monster.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monster = updatedMonster
        next()
      }
    })
  },
  create (req, res, next) {
    req.body.username = req.session.username

    Monster.create(req.body, (err, createdMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monster = createdMonster
        next()
      }
    })
  },
  show (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monster = foundMonster
        // res.locals.data.newName = foundMonster.name
        next()
      }
    })
  }
}

module.exports = dataController
