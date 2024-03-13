const UserController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/users', UserController.getAllUsers);

module.exports = {
    router,
};
