const Colaborador = require("../models/colaboradorPreCad");

exports.updateUser = (req, res) => {
    const Userdata = new Colaborador(req.body)
    console.log("Usuario: ", Userdata)

    // Save Tutorial in the database
    Colaborador.updateUser(Userdata, req.params.id, (err, data) => {
        if (err)
            res.send(err);
    });
};