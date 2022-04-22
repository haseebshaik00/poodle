const route = require('express').Router();
const { createAnonymousUser, 
        getUserByID, 
        getUserByUsername,
        getAllUsers } = require('../../controllers/users');

route.get('/:id', async (req, res) => {
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id);
    }
    else{
        user = await getUserByID(req.params.id);
    }
    if(user){
        res.status(200).send(user);
    }
    else{
        res.send(404).send({
            error: "No user with given id or username"
        })
    }
});

route.get('/', async (req, res) => {
    let users = await getAllUsers();
    res.status(200).send(users);
})

route.post('/', async (req, res) => {
    const user = await createAnonymousUser();
    res.status(201).send(user);
});

module.exports = {
    usersRoute: route
}