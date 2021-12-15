const mongoose = require("mongoose")

const connect = () => {

    return mongoose.connect("mongodb+srv://sagar:mongodb0007@cluster0.pfnuu.mongodb.net/vrbo?retryWrites=true&w=majority")
}

module.exports = connect;