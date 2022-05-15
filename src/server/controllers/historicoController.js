const Historico = require("../models/historico.js");

exports.createNewHistorico = (req, res) => {
    const data = new Historico(req.body)
    Historico.createNewHistorico(data, (err, hist) => {
        if (err)
            res.send(err);
    })
}