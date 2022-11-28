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

router.put('/:name/:id/postIndexLikes', dataController.updatePostLikes, viewController.redirectIndexLike)
router.put('/:name/:id/postIndexDislikes', dataController.updatePostDislikes, viewController.redirectIndexLike)
router.put('/:name/:id/postShowLikes', dataController.updatePostLikes, viewController.redirectShowLike)
router.put('/:name/:id/postShowDislikes', dataController.updatePostDislikes, viewController.redirectShowLike)

router.put('/:name/:id/comments/:commentId/commentLikes', dataController.updateCommentLikes, viewController.redirectComment)
router.put('/:name/:id/comments/:commentId/commentDislikes', dataController.updateCommentDislikes, viewController.redirectShow)
router.delete('/:name/:id/comments/:commentId', dataController.deleteComment, viewController.redirectComment)

router.delete('/:name/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:name/:id', dataController.update, viewController.redirectShow) // update
router.put('/:name/:id/comments', dataController.createComment, viewController.redirectComment)

router.post('/', dataController.create, viewController.redirectShow) // create
router.get('/:name/:id/edit', dataController.show, viewController.edit) // edit
router.get('/:name/:id', dataController.show, viewController.show) // show

module.exports = router
