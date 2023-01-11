const express = require('express');
const app = express();

const Home = (req, res) => {
    res.send("This is Home Router")
    console.log("This is Home Router Welcome to Home page ");
}
module.exports = Home;