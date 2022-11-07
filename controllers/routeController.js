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
router.get('/status/:category', dataController.category, viewController.category) // new
router.get('/type/:category', dataController.category, viewController.category) // new
router.get('/region/:category', dataController.category, viewController.category) // new
router.delete('/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:id', dataController.update, viewController.redirectShow) // update
router.post('/', dataController.create, viewController.redirectShow) // create
router.get('/:id/edit', dataController.show, viewController.edit) // edit
router.get('/:id', dataController.show, viewController.show) // show

module.exports = router
