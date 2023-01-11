const express = require('express');
const mongoose = require('mongoose');
var autoincrement = require('mongoose-auto-increment');
var User = mongoose.Schema({
    id: {

    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    }

})
autoincrement.initialize(mongoose.connection);
User.plugin(autoincrement.plugin, "USER")
module.exports = mongoose.model("USER", User);