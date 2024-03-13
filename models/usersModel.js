const mongoose = require('mongoose');
const conexion = require('../conexion');

const getUserModel = async () =>{
    const conn = await conexion();

    const UserSchema = new mongoose.Schema({
        id: Number,
        nombres: String,
        apellidos: String,
        correo: String,
        ciudad: String,
        pais: String,
        salario: Number,
        empresa_id: Number,
        created_at: Date,
        updated_at: Date
    });
      
    return conn.model('User', UserSchema);

}

module.exports = {
    getUserModel,
};
