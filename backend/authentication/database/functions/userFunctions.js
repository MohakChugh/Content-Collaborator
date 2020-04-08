const User = require('../models/user')

const createUser = async (name, email, password) => {
    let user = new User({ name, email, password })
    return await user.save()
}

const getUserById = async (userid) => {
    let user = await User.findById(userid)
        .then(res => { return res })
        .catch(() => { return 'User Not Found' })
    return user
}

getAllUsersAndData = async () => {
    let users = await User.find()
    return users
}

const fetchPasswordOfUser = async (email) => {
    try {
        console.log(`email: ${email}`)
        let user = await User.findOne({ email: email }).exec()
        console.log(`user: ${user}`)
        if (user == null) {
            // User does not exists
            return false
        }
        console.log(`USER: ${user}`)
        return user.password
    } catch (err) {
        console.log(err)
        return err
    }

}

const fetchUserid = async (email) => {
    try {
        let user = await User.findOne({ email: email }).exec()
        if (user == null) {
            return false
        } else {
            return true
        }
    } catch (err) {
        console.log(err)
        return false;
    }
}

const checkIfUserExists = async (userid) => {
    let user = await User.findById(userid)
        .then(() => { return true })
        .catch(() => { return false })
    return user
}

exports.createUser = createUser
exports.getUserById = getUserById
exports.getAllUsersAndData = getAllUsersAndData
exports.fetchPasswordOfUser = fetchPasswordOfUser
exports.fetchUserid = fetchUserid
exports.checkIfUserExists = checkIfUserExists

