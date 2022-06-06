const Pf = require("../models/pessoaFisica")

exports.createPessoaFisica = (req, res) => {
    const Userdata = new Pf(req.body)
    console.log("Pessoa Física: ", Userdata)

    // Save Tutorial in the database
    Pf.createPessoaFisica(Userdata,req.body.id,(err, data) => {
        if (err){}
            res.send(err);
    });
};