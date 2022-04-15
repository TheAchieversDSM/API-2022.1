const Notificacao = require("../models/notificacao")

exports.createNotifi = (req,res) => {
    const id = req.params.id
    console.log("Usuario: ", id)
    Notificacao.createNotifi(id,(err,result) => {
        if (err)
        res.send(err);
        res.send(result)
    })
}
