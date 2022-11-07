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
  caught (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  uncaught (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  type (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.type = req.params.type
        res.locals.data.monsters = foundMonsters
        next()
      }
    })
  },
  region (req, res, next) {
    Monster.find({}, (err, foundMonsters) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.region = req.params.region
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