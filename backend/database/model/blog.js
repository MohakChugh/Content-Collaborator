const mongoose = require('mongoose')
const Blog = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    time: {
        type: Date,
        default: new Date()
    },
    Content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Blog", Blog);
