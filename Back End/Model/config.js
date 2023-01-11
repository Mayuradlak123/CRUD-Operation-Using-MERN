const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
// app.use(dotenv());
var db = process.env.URL;
const config = () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        }).then((res) => {
            console.log("Connected to database ");
        }).catch((err) => {
            console.log("Failed to connect to database " + err);
        })
    } catch (error) {
        console.warn("Failed to Connect With Database : " + error)
    }
}
module.exports = config();