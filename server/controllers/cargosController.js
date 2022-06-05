const Cargos = require("../models/cargos")

exports.getAllCargos = (req,res) =>{
    Cargos.getAllCargos((err, cargos) =>{
        if(err)
        res.send("Falha",err);
        console.log('Cargos Encontrados');
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

exports.createNewCargo = (req,res) =>{
    const car_data = new Cargos(req.body)
    Cargos.createNewCargo(car_data,(err,cargo) =>{
        if(err){
            if (err.errno == "1062"){
                console.log("Entrada Duplicada");
                res.send({
                    erro:"Um cargo com o mesmo nome já existe, por favor insira um nome válido"
                })
        }
        }else{
            console.log("Cargo criado com Sucesso!");
            res.send("Cargo criado com Sucesso!")
        }
    })
}

exports.getAllUserIdFromCargo = (req,res) =>{
    Cargos.getAllUserIdFromCargo(req.params.id,(err,ids) =>{
        if(err){
            res.send(err)
        }else{
            res.send(ids)
        }
    })
}