const {connector} = require('../conexion');
const {getUserModel} = require('../models/usersModel');


const getAllUsers = async (req, res) => {
    try {
        await connector.connect();
        const User = await getUserModel();
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllUsers,
};
  