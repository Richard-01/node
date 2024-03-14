const { Schema, model } = require('mongoose');

    const UserSchema = new Schema({
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
      
    const User = model('users', UserSchema);

module.exports = {
    User,
};
