const Departamento = require("../models/departamento")

exports.getAllDepart = (req,res) =>{
    Departamento.getAllDepart((err, departamentos) =>{
        if(err)
        res.send(err);
        console.log('Departamentos:', departamentos);
        res.send(departamentos)
    })
}

exports.getUserDepart = (req,res) =>{
    Departamento.getUserDepart(req.params.id,(err,departamento) =>{
        if(err)
        res.send(err);
        console.log('Departamento:', departamento);
        res.send(departamento)
    })
}

exports.getDepartByCargo = (req,res) =>{
    Departamento.getDepartByCargo(req.params.id,(err,departamento)=>{
        if(err){
            res.send(err);
        }else{
            res.send(departamento)
        }
    })
}

exports.getDepartByName = (req,res) =>{
    Departamento.getDepartByName(req.params.name,(err,departamento)=>{
        if(err){
            res.send(err);
        }else{
            res.send(departamento)
        }
    })
}

exports.createNewDep = (req,res) =>{
    const dep_data = new Departamento(req.body)
    Departamento.createNewDep(dep_data,(err,departamento) =>{
        if(err){
            if (err.errno == "1062"){
                console.log("Entrada Duplicada");
                res.send({
                    erro:"Um departamento com o mesmo nome já existe, por favor insira um nome válido"
                })
        }
        }else{
            console.log("Departamento criado com Sucesso!");
            res.send("Departamento criado com Sucesso!")
        }
    })
}

exports.getAllDepartAndHeads = (req,res) =>{
    Departamento.getAllDepartAndHeads((err,departamentos)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(departamentos)
        }
    })
}
