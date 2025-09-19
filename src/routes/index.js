const siteRouter = require('./site')
const courseRouter = require('./course')

function routes(app) {
    app.use('/course', courseRouter)
    app.use('/', siteRouter)
}

module.exports = routes
