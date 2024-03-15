const {connector} = require("./conexion");
const {router} = require("./routes/userRoute");
const express = require("express");
const PORT = 3000;

connector();
const app = express();
app.use(express.json());

app.use("/", router);
app.use("/users", router);
app.use('/users/:id', router);
app.use('/users/createUser', router);


app.listen(PORT, () => {
    console.log(`Conectado en el puerto --- ${PORT}!`)
});
