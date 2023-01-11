const express = require('express');
const app = express();
const cors = require('cors');
const User = require('../Schema/Schema');
app.use(cors());
app.use(express.json());

const ReadData = async(req, res) => {
    var Data = await User.find({});
    res.send(Data);
    console.log(Data);
    // console.log("User Registered Successfully");
}
module.exports = ReadData;