const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('comments api');
});

module.exports = {
    commentsRoute: route
}