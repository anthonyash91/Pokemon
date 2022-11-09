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
    const userLogged = { username: req.session.username }

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
  updateComment (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        const commentProfileIcons = ['https://cdn.icon-icons.com/icons2/851/PNG/512/snorlax_icon-icons.com_67505.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/pikachu_icon-icons.com_67535.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/mew_icon-icons.com_67542.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/rattata_icon-icons.com_67508.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/dratini_icon-icons.com_67564.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/bellsprout_icon-icons.com_67585.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/ubat_icon-icons.com_67493.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/bulbasaur_icon-icons.com_67580.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/jigglypuff_icon-icons.com_67550.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/psyduck_icon-icons.com_67509.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/squirtle_icon-icons.com_67504.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/meowth_icon-icons.com_67543.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/eevee_icon-icons.com_67563.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/charmander_icon-icons.com_67576.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/venonat_icon-icons.com_67499.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/caterpie_icon-icons.com_67577.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/pidgey_icon-icons.com_67536.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/mankey_icon-icons.com_67546.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/abra_icon-icons.com_67592.png', 'https://cdn.icon-icons.com/icons2/851/PNG/512/weedle_icon-icons.com_67497.png']
        const randomizeProfileIcons = Math.floor(Math.random() * commentProfileIcons.length)
        const chooseRandomProfileIcon = commentProfileIcons[randomizeProfileIcons]

        req.body.datePosted = new Date().toLocaleString()
        req.body.commentProfileIconUrl = chooseRandomProfileIcon
        foundMonster.comments.push(req.body)

        Monster.findByIdAndUpdate(req.params.id, foundMonster, { new: true }, (err, updatedMonster) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.monster = updatedMonster
            next()
          }
        })
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
