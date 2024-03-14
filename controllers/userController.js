const {connector} = require('../conexion');
const {getUserModel} = require('../models/usersModel');


const getAllUsers = async (req, res) => {
    try {
        const User = await getUserModel();
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log('Error al obtener los usuarios', error);
        res.status(500).json({ error: error.message });
    } finally {
        await connector.close();
    }
};


module.exports = {
    getAllUsers,
};
  