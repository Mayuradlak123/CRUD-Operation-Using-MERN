const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const getUser = require('../Controller/getUser')
const port = process.env.port;
const User = require('../Schema/Schema');
const config = require('./config');
const editController = require('../Controller/editController');
app.use(cors());
app.use(express.json());
const Home = require('../Controller/homeController');
const Register = require('../Controller/registerController');
const ReadData = require('../Controller/readData');
const deleteController = require('../Controller/deleteController')
app.get('/', Home);
app.listen(port, () => {
    console.log("Server is listening on port " + port);
})
app.post('/register', Register);
app.get('/read', ReadData);
app.get('/delete', async(req, res) => {
    await User.deleteMany({});
    res.send("Deleted Successfully");


})
app.get('/user/:id', getUser);
app.delete('/delete/:id', deleteController)
app.put('/edit', editController);