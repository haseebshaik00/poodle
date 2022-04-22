const route = require('express').Router();
const { getAllPosts, createNewPost } = require('../../controllers/posts');
 
route.get('/', async (req, res) => {
    const posts = await getAllPosts();
    res.status(200).send(posts);
});

route.post('/', async (req, res) => {
    const { userId, title, body } = req.body;

    if( (!userId) || (!title) || (!body)){
        return res.status(400).send({
            error: "Need req.body elements"
        })
    }
    const post = await createNewPost(userId, title, body);
    res.status(201).send(post);
});

module.exports = {
    postsRoute: route
}