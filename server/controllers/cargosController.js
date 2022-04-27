const Cargos = require("../models/cargos")

exports.getAllCargos = (req,res) =>{
    Cargos.getAllCargos((err, cargos) =>{
        if(err)
        res.send("Falha",err);
        console.log('Cargos:', cargos);
        res.send(cargos)
    })
}
