const InfoAcademica = require("../models/infoAcademica");

exports.createInfoAcademica = (req, res) => {
    const Userdata = new InfoAcademica(req.body)
    console.log("Usuario: ", Userdata)

    // Save Tutorial in the database
    InfoAcademica.createInfoAcademica(Userdata, (err, data) => {
        if (err)
            res.send(err);
    });
};