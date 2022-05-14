const Pj = require("../models/pessoaJuridica")

exports.createPessoaJuridica = (req, res) => {
    const Userdata = new Pj(req.body)
    console.log("Pessoa Jurídica: ", Userdata)
    Pj.createPessoaJuridica(Userdata,(err, data) => {
        if (err)
            res.send(err);
    });
};