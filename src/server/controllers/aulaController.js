const Aula = require("../models/aula")

exports.createNewAula = (req, res) => {
    const aula_data = new Aula(req.body)
    Aula.createNewAula(aula_data, (err, result) => {
        if (err) {
             if (err.errno == "1062"){
                console.log("Entrada Duplicada");
                res.send({
                    erro:"Uma aula com o mesmo nome já existe, por favor insira um nome válido."
                })
                }
        }
        else {
            console.log("Aula Criada Com sucesso")
            res.send("Aula Criada Com sucesso")
        }
    })
}

exports.getAulaIdByName = (req, res) => {
    Aula.getAulaIdByName(req.params.name, (err, id) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(id)
            res.send(id)
        }
    })
}


