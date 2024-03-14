const UserController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/', UserController.getAllUsers);

module.exports = {
    router,
};
