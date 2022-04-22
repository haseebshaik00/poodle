const ADJECTIVE = [ 'cool', 'hot', 'fat', 'dude', 'dashing'];
const OBJECTS = ['ram', 'sam', 'kunal', 'amrit', 'haseeb'];

function getRandUser(){
    return ADJECTIVE[Math.floor(Math.random()*5)] + '-' + OBJECTS[Math.floor(Math.random()*5)];
}

// tests
// console.log(getRandUser());
// console.log(getRandUser());
// console.log(getRandUser());
// console.log(getRandUser());

module.exports = {
    getRandUser
};