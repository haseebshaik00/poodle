const express = require('express');

const { db } = require('./db/models');
const { usersRoute } = require('./routes/users');
const { postsRoute } = require('./routes/posts');
const { commentsRoute } = require('./routes/posts/comments');

const app = express();

// setup these 2 for post requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/public'));
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);

// force: true -- destroys the previous table and starts the server creating a new one -- done at the time of production
db.sync()
    .then(() => {
        app.listen(8383, () => {
            console.log("Server Started on 8383!");
        });
    })
    .catch((err) => {
        console.error("Could not start database");
        console.error(err);
    });