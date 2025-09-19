const Course = require('../models/Course')

class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)
    }

    // GET /:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => res.render('courses/read', {course}))
            .catch(next)
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // POST /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`

        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/courses'))
            .catch(next)
    }

    //
}

module.exports = new SiteController()
