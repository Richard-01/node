const User = require('../models/usersModel');


const controllers = {

    getHome: async (req, res) =>{
        try {
            res.json("Estas dentro!")
        } catch (error) {
            console.error('Algo malo pasa',error);
            res.status(500).json({ error: error.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener los usuarios', error);
            res.status(500).json({ error: error.message });
        }
    },
    
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (error) {
            console.error('Error al obtener el usuario', error);
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            console.error('Error al crear el usuario', error);
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = {
    controllers,
};
  
