const mongoose = require('mongoose');
const config = require('../config/config');
const URL = config.Mongo_URI;

async function connectDB(){
    try{
        await mongoose.connect(URL)
        console.log("DataBase connected successfully...");
    } catch(err){
        console.log("Error: ", err);
    }
}

module.exports = connectDB;

