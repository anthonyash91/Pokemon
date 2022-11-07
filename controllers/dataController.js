const Monster = require('../models/monster')

// put routes in here that pull data from the DB (index, delete, update, create, show)
const dataController = {
  index (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  isCaught (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.isCaught = req.params.isCaught
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  category (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.category = req.params.category
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  newView (req, res, next) {
    res.locals.data.region = req.params.region
    next()
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
        next()
      }
    })
  }
}

module.exports = dataController
