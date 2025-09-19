const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/create', siteController.create)
router.post('/store', siteController.store)

// router.get('/update', siteController.update)
// router.get('/delete', siteController.delete)

// router.get('/update', siteController.update)
// router.get('/delete', siteController.delete)

// router.get('/update', siteController.update)
// router.get('/delete', siteController.delete)

router.get('/:slug', siteController.show)
router.get('/', siteController.index)

module.exports = router
