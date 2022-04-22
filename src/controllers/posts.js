const { Posts, Users } = require('../db/models');

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title, body, userId
    });
    return post;
};

async function getAllPosts(){
    const posts = await Posts.findAll({
        // this includes all the users also - the user which has uploaded the post
        include: [Users]
    });
    return posts;
};

module.exports = {
    createNewPost, getAllPosts
}