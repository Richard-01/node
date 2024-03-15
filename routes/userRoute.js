const {controllers} = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router
    .get('/', controllers.getHome)
    .get('/users', controllers.getAllUsers)
    .get('/users/:id', controllers.getUserById)
    .post('/users/createUser', controllers.createUser)

module.exports = {
    router,
};
