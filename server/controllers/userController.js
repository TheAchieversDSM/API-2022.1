const User = require("../models/user");

exports.createUser = (req, res) => {

    const Userdata = new User(req.body)
    console.log("Usuario:", Userdata)
    // Save Tutorial in the database
    User.createUser(Userdata, (err, data) => {
      if (err)
    res.send(err);

    });
  };