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
router.get('/new/:region', dataController.newView, viewController.newView) // new
router.get('/:isCaught', dataController.isCaught, viewController.isCaught) // new
router.delete('/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:id', dataController.update, viewController.redirectShow) // update
router.post('/', dataController.create, viewController.redirectShow) // create
router.get('/:id/edit', dataController.show, viewController.edit) // edit
router.get('/type/:type', dataController.type, viewController.type) // new
router.get('/region/:region', dataController.region, viewController.region) // new
router.get('/:id', dataController.show, viewController.show) // show

module.exports = router
