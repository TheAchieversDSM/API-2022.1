const AulaAndamento = require('../models/aulaAndamento')

exports.createProgresso = (req, res) => {
    const aula_andamento = new AulaAndamento(req.body) 
    AulaAndamento.createProgresso(aula_andamento, (err, result) => {
        if (err) {
            if (err.errno == "1062"){
                console.log("Entrada Duplicada");
                res.send({
                    erro:"Progresso já existe, por favor, insira um progresso válido."
                })
            } 
            else {
                console.log("Progresso criado com sucesso");
                res.send("Progresso criado com sucesso")
            }
        }
    })
}

exports.getProgressoByUserId = (req, res) => {
    AulaAndamento.getProgressoByUserId(req.params.name, (err, id) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(id);
            res.send(id);
        }
    })
}