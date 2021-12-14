const express = require("express");
const connect = require("./config/db");

const app = express()

app.use(express.json())

const port = 2244;


app.listen(port, async() => {

    await connect()

    console.log(`listening to port ${port}`)

})