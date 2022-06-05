const InfoAcademica = require("../models/infoAcademica");

exports.createInfoAcademica = (req, res) => {
    console.log(req.body);
    const Userdata = new InfoAcademica(req.body)

    console.log("Usuario: ", Userdata)

    InfoAcademica.createInfoAcademica(Userdata,(err, data) => {
        if (err)
            res.send(err);
    });
};

exports.updateInfoAcademica = (req, res) => {
    const Userdata = new InfoAcademica(req.body)

    console.log("infoAcademica: ", Userdata)

    InfoAcademica.updateInfoAcademica(Userdata, req.params.id, (err, data) => {
        if (err)
            res.send(err);
    });
};

exports.getInfoAcademica = (req,res) => {
    InfoAcademica.getInfoAcademica(req.params.id,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }

    })
}