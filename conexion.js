const mongoose = require('mongoose');

let conn = null;
const MONGODB_URI ="mongodb+srv://richardmontoyaa1:Nn2gzy3EeLIyvcTq@cluster0.aqp1drz.mongodb.net/";

const connector = async () => {
  if (conn === null) {
    conn = await mongoose.createConnection(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  }

  return conn;
};


module.exports = {
    connector,
};