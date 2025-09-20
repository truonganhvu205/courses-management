const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/create', siteController.create)
router.post('/store', siteController.store)

router.get('/edit/:id', siteController.edit)
router.put('/:id', siteController.update)

// router.get('/update', siteController.update)
// router.get('/delete', siteController.delete)

router.get('/:slug', siteController.detail)
router.get('/', siteController.index)

module.exports = router
