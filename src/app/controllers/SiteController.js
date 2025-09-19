const Course = require('../models/Course')

class SiteController {
    // GET /
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => res.render('home', {courses}))
            .catch(next)
    }
}

module.exports = new SiteController
