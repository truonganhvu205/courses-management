const mongoose = require('mongoose')

async function connect(req, res) {
    try {
        await mongoose.connect('mongodb://localhost:27017/miniprojects')
    } catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {connect}
