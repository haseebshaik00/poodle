const { Users } = require('../db/models');
const { getRandUser } = require('../utils/username');

async function createAnonymousUser(){
    const user = await Users.create({
        username: getRandUser()
    });
    return user;
}

async function getAllUsers(){
    const users = await Users.findAll();
    return users;
}

async function getUserByID(id){
    const user = await Users.findOne({id: id});
    return user;
}

async function getUserByUsername(username){
    const user = await Users.findOne({username: username});
    return user;
}

module.exports = {
    createAnonymousUser, getUserByID, getUserByUsername, getAllUsers
}

// test
// async function task(){
//     console.log(await createAnonymousUser());
//     console.log(await createAnonymousUser());
//     console.log(await createAnonymousUser());
// }

// task(); 