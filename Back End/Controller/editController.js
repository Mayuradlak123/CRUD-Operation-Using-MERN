const User = require('../Schema/Schema');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const editController = async(req, res) => {
    const { id, name, username, email, phone } = req.body;
    if (!id || !name || !username || !email || !phone) {
        res.send("Please Fill All field ");
    }
    console.log(req.body.name);
    var update = {
        $set: {
            "name": name,
            "email": email,
            "username": username,
            "phone": phone
        }
    }
    try {
        await User.findOneAndUpdate({ "_id": id }, update).then((result) => {
            console.log(result);
        })

        // $set: {
        //     "name": name,
        //     "email": email,
        //     "username": username,
        //     "phone": phone,
        // },
        // $upsert: true,
        // $setOnInsert: true,

        // }).then((result) => {

        //     res.send({ "Status": "Ok" }, req.body)
        //     console.log("User Updated Successfully " + result);
        // })
    } catch (err) {
        console.log("Failed to Update User" + err);
    }
}
module.exports = editController;