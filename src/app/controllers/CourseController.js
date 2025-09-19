const Course = require('../models/Course')

class CourseController {
    // GET /courses
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('courses/courses', {courses}))
            .catch(next)
    }

    // GET /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => res.render('courses/show', {course}))
            .catch(next)
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // GET /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`

        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/courses'))
            .catch(next)
    }
}

module.exports = new CourseController()
