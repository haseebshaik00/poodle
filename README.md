# POODLE APP SETUP

## Sql Database Setup
login into root with password
``` sql
CREATE DATABASE poodleDB;
CREATE USER poodleUser IDENTIFIED BY 'poodle123';
USE poodleDB;
GRANT ALL PRIVILEGES ON poodleDB.* TO poodleUser;
FLUSH PRIVILEGES;
```

## Setup git
```
echo "# poodle" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/haseebshaik00/poodle.git
git push -u origin main
```

## Setup node & other dependencies
```
npm init
npm install --save express hbs mysql2 sequelize
```

## Project Structure

### Backend
```
src
├───contollers      # functions to connect routes to db operations
├───db              # db connections and model definitions
├───public          # html/css/js files for static part of the website
└───routes          # express middlewares (route wise)
└─── utils          # to store utility functions such as getRandomUsername
```

### Frontend
```shell
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # our own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
```

## Business Logic 
### Users
1. **create users** 
    this will create a new user with a random username

### Posts
1. **create post**
    this will create a new post, required fields are 
    - username (the author of this post)
    - title
    - body 
2. **show all posts**
    list all existing posts, we should have following filtering support
    - filter by username
    - filter by query contained in title (search by title)
3. **edit posts** `TBD`
4. **delete posts** `TBD` 

### Comments 
1. **show all comments (of a user)**
2. **show all comments (under a post)**
3. **add a comment**


## API Documentation
### `users` 

1. `POST /users`  : Creates a new user with random username and an incrementing user id
2. `GET /users/{userid}` : Get an user with a given user id
3. `GET /users/{username}` : Get an user with a given username


### `posts` 
1. `GET /posts`  : Get all posts by everyone 
2. `POST /posts` : Create a new post. 
Required fields in body - 
```
userId=
title=
body=
```
