const User = require('../models/user');

async function createUser(userData) {
    const user = new User(userData);
    await user.save();
    return user;
}

async function findUsers(){
    return await User.find({});
}

module.exports = {
    createUser,
    findUsers
};