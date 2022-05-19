const Cargos = require("../models/cargos")

exports.getAllCargos = (req,res) =>{
    Cargos.getAllCargos((err, cargos) =>{
        if(err)
        res.send("Falha",err);
        console.log('Cargos:', cargos);
        res.send(cargos)
    })
}

exports.getUserCargo = (req,res) =>{
    Cargos.getUserCargo(req.params.id,(err,cargo) =>{
        if(err)
        res.send("Falha ao encontrar o Cargo",err);
        console.log('Cargo:', cargo);
        res.send(cargo) 
    })
}