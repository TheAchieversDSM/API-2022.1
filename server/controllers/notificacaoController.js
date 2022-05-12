const Notificacao = require("../models/notificacao")

exports.getAll = (req,res) => {
    Notificacao.getAll((err,result) => {
        if (err){
        res.send(err);
        }
        res.send(result)
    })
}
