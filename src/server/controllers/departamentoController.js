const Departamento = require("../models/departamento")

exports.getAllDepart = (req,res) =>{
    Departamento.getAllDepart((err, departamentos) =>{
        if(err)
        res.send(err);
        console.log('Departamentos:', departamentos);
        res.send(departamentos)
    })
}
