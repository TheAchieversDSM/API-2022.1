const Beneficios = require("../models/beneficios")

exports.updateBenefits = (req, res) => {
    const Userdata = new Beneficios(req.body)
    console.log("Benefícios: ", Userdata)

    Beneficios.updateBenefits(Userdata,req.params.id,(err, data) => {
        if (err){
            res.send(err);
        }
    });
};