const User = require("../models/preCad1");


exports.updateUser = (req, res) => {
    const Userdata = new User(req.body)
    const Userid = req.body.id
    console.log("Usuario: ", Userdata)

    // Save Tutorial in the database
    User.updateUser(Userdata, Userid, (err, data) => {
        if (err)
            res.send(err);
    }
    );
};