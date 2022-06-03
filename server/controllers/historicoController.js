const Historico = require("../models/historico.js");

exports.createNewHistorico = (req, res) => {
    const data = new Historico(req.body)
    Historico.createNewHistorico(data, (err, hist) => {
        if (err)
            res.send(err);
    })
}

exports.newHistoricoCargo = (req,res) =>{
    const data = req.body
    Historico.newHistoricoCargo(data, (err, hist) =>{
        if (err)
            res.send(err);   
    }) 
}

exports.desligamento = (req,res) =>{
    const data = req.body
    Historico.desligamento(data,req.params.id,(err,hist) =>{
        if(err){
            console.log(err);
            res.send({
                erro:'Erro ao Desligar o colaborador'
            })
        }else{
            res.send('Desligamento Realizado')
        }
    })
}