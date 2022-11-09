const RESOURCE_PATH = '/pokemon' // the resource path refers to the path for your URL.

// only put routes that show something on a page (index, new, edit, and show) and redirect routes; create doesn't show anything, neither does delete, so they won't be put here
const viewController = {
  index (req, res, next) {
    res.render('monsters/Index', res.locals.data) // render the file path for your JSX files
  },
  create (req, res, next) {
    res.render('monsters/New', res.locals.data)
  },
  category (req, res, next) {
    res.render('monsters/Category', res.locals.data)
  },
  edit (req, res, next) {
    res.render('monsters/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('monsters/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const monsterId = req.params.id || res.locals.data.monster._id
    res.redirect(`${RESOURCE_PATH}/${monsterId}`)
  },
  redirectComment (req, res, next) {
    const monsterId = req.params.id || res.locals.data.monster._id
    res.redirect(`${RESOURCE_PATH}/${monsterId}#comments-end`)
  }
}

module.exports = viewController
