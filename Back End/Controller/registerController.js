const express = require('express');
const app = express();
const cors = require('cors');
const User = require('../Schema/Schema');
app.use(cors());
app.use(express.json());
const Register = async(req, res) => {

    res.send(req.body)
    console.log(req.body);
    const { name, email, username, password, phone } = req.body;
    if (!name || !email || !username || !password || !phone) {
        console.warn("All Field is Required : ");
    }
    var Data = {
        "name": name,
        "email": email,
        "phone": phone,
        "password": password,
        "username": username
    }
    try {

        var user = await new User(Data);

        await user.save().then((res) => {
            console.log("User Registered Sucessfully");
        }).catch((err) => {
            console.log("Failed to Insert Data");
        })
    } catch (err) {

    }
}
module.exports = Register;