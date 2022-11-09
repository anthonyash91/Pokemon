const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
})

router.get('/', dataController.index, viewController.index) // index
router.get('/status', viewController.redirectHome)
router.get('/region', viewController.redirectHome)
router.get('/type', viewController.redirectHome)
router.get('/new', viewController.create) // new
router.get('/:name', viewController.redirectHome) // update
router.get('/status/:category', dataController.index, viewController.index)
router.get('/type/:category', dataController.index, viewController.index)
router.get('/region/:category', dataController.index, viewController.index)
router.delete('/:name/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:name/:id', dataController.update, viewController.redirectShow) // update
router.put('/:name/:id/comments', dataController.updateComment, viewController.redirectComment)
router.post('/', dataController.create, viewController.redirectShow) // create
router.get('/:name/:id/edit', dataController.show, viewController.edit) // edit
router.get('/:name/:id', dataController.show, viewController.show) // show

module.exports = router
