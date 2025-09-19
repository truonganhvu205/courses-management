const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)

// router.get('/update', courseController.update)
// router.get('/delete', courseController.delete)

router.get('/:slug', courseController.show)
router.get('/', courseController.index)

module.exports = router
