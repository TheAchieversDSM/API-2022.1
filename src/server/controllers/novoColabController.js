const Perfil = require("../models/novoColab");

exports.createUser = (req, res) => {

    const Userdata = new Perfil(req.body)
    console.log("Usuario:", Userdata)
    // Save Tutorial in the database
    Perfil.createUser(Userdata, (err, data) => {
      if (err)
    res.send(err);

    });
  };