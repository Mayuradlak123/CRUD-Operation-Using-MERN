const User = require('../Schema/Schema');

const deleteController = async(req, res) => {
    try {
        await User.findByIdAndDelete({ "_id": req.params.id }).then(() => {
            console.log("User Deleted Successfully ");
            res.send({ "Status": "Ok" }).status("200");
        })
    } catch (err) {
        console.warn("Error While Compile");
    }
}
module.exports = deleteController;