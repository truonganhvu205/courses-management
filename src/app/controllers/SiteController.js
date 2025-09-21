const Course = require('../models/Course')

class SiteController {
    // GET /courses
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)
    }

    // GET /courses/:slug
    detail(req, res, next) {
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
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // GET /courses/edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {course}))
            .catch(next)
    }

    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // DELETE /courses/:id
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new SiteController()
