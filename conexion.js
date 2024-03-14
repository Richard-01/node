const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://richardmontoyaa1:Nn2gzy3EeLIyvcTq@cluster0.aqp1drz.mongodb.net/";

let conn = null;

const connector = async () => {
  try {
    if (conn === null) {
      conn = await mongoose.createConnection(MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      });
    }
    return conn;

  } catch (error) {
    throw new Error(`Error al conectar a la base de datos: ${error.message}`);
  }

};


module.exports = connector;