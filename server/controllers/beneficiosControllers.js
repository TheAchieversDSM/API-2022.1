const Beneficios = require("../models/beneficios")

exports.updateBenefits = (req, res) => {
    const Userdata = new Beneficios(req.body)
    console.log("Benefícios: ", Userdata)

    // Save Tutorial in the database
    Beneficios.updateBenefits(Userdata,req.body.id,(err, data) => {
        if (err){}
            res.send(err);
    });
};