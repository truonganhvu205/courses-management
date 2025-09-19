const siteRouter = require('./site')
const courseRouter = require('./courses')

function routes(app) {
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)
}

module.exports = routes
