const {controllers} = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router
    .get('/', controllers.getHome)
    .get('/users', controllers.getAllUsers)

module.exports = {
    router,
};
