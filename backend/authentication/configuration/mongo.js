const mongoose = require('mongoose')

const connectDB = () => {
    // mongoose.connect('mongodb://localhost/my_database', {
    mongoose.connect('mongodb+srv://mohakchugh:mohakchugh@blogs-09lhw.mongodb.net/blogs', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(`Mongo Db Connected`)
        })
        .catch(err => {
            console.log(`Error in connecting to mongodb. ${err}`)
        });
}
exports.connectDB = connectDB