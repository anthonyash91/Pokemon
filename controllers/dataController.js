const Monster = require('../models/monster')

const dataController = {
  index (req, res, next) {
    let filterKey
    let options = {}

    const filters = {
      region: ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'hisui', 'paldea'],
      hasBeenCaught: ['caught', 'uncaught'],
      primaryType: ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
    }

    for (const property in filters) {
      const compare = filters[property].includes(req.params.category)

      if (compare) {
        filterKey = property
      }
    }

    if (req.route.path === '') {
      options = { username: req.session.username }
    }

    if (filterKey === 'primaryType') {
      options.$or = [
        { primaryType: req.params.category },
        { secondaryType: req.params.category }
      ]

      options.$and = [
        { username: req.session.username }
      ]
    } else {
      options = { username: req.session.username }
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
        res.locals.data.username = req.session.username
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
  createComment (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        const randomizeProfileIcons = Math.floor(Math.random() * (53 - 1 + 1)) + 1

        req.body.datePosted = new Date().toLocaleString()
        req.body.commentProfileIconUrl = `/icons/${randomizeProfileIcons}.png`
        req.body.likes = 0
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
  deleteComment (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        const filteredComments = foundMonster.comments.filter((comment) => {
          return comment._id.toString() !== req.params.commentId
        })

        Monster.findByIdAndUpdate(req.params.id, {
          comments: filteredComments
        }, { new: true }, (err) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.monster = foundMonster
            next()
          }
        })
      }
    })
  },
  updateCommentLikes (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        const filteredComment = foundMonster.comments.map((comment) => {
          if (comment._id.toString() === req.params.commentId) {
            comment.likes += 1
          }

          return comment
        })

        Monster.findByIdAndUpdate(req.params.id, { comments: filteredComment }, { new: true }, (err) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.monster = foundMonster
            next()
          }
        })
      }
    })
  },
  updateCommentDislikes (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        const filteredComment = foundMonster.comments.map((comment) => {
          if (comment._id.toString() === req.params.commentId) {
            comment.likes -= 1
          }

          return comment
        })

        Monster.findByIdAndUpdate(req.params.id, { comments: filteredComment }, { new: true }, (err) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.monster = foundMonster
            next()
          }
        })
      }
    })
  },
  updatePostLikes (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundMonster.likes += 1

        Monster.findByIdAndUpdate(req.params.id, foundMonster, { new: true }, (err, updatedMonster) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            res.locals.data.monster = updatedMonster
            next()
          }
        })
      }
    })
  },
  updatePostDislikes (req, res, next) {
    Monster.findById(req.params.id, (err, foundMonster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundMonster.likes -= 1
        Monster.findByIdAndUpdate(req.params.id, foundMonster, { new: true }, (err, updatedMonster) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
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
    req.body.likes = 0

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
