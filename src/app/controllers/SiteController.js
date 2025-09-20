const Course = require('../models/Course')

class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)
    }

    // GET /:slug
    detail(req, res, next) {
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => res.render('courses/read', {course}))
            .catch(next)
    }

    // GET /create
    create(req, res, next) {
        res.render('courses/create')
    }

    // POST /store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`

        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // GET /edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {course}))
            .catch(next)
    }

    // PUT /:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // DELETE
}

module.exports = new SiteController()
