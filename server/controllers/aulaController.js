const Aula = require("../models/aula")

exports.createNewAula = (req, res) => {
    const aula_data = new Aula(req.body)
    Aula.createNewAula(aula_data, (err, result) => {
        if (err) {
            console.log(err)
            res.send("erro", err)
        }
        else {
            console.log("Aula Criada Com sucesso")
            res.send("Aula Criada Com sucesso")
        }
    })
}

exports.getAulaIdByName = (req, res) => {
    Aula.createNewAula(req.params.aula_nome, (err, id) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(id)
            res.send(id)
        }
    })
}

