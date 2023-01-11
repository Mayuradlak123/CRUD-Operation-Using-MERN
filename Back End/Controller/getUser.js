const User = require('../Schema/Schema');
const express = require('express');
const { query } = require('express');
const app = express();

const getUser = async(req, res) => {
    var response = await User.find({ _id: req.params.id })
    res.send(response)
    console.log(response);
}
module.exports = getUser;