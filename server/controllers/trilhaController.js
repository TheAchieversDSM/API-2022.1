const Trilha = require("../models/trilha")

exports.createNewTrilha = (req, res) =>{
    const tri_data = new Trilha(req.body)
    Trilha.createNewTrilha(tri_data,(err, data) =>{
         if (err){
            res.send(err);
         }
    })
}

exports.getAllTrilha = (req,res) => {
    Trilha.getAllTrilha((err,data)=>{
        if (err){
            res.send(err);
        }else{
            res.send(data)
        }
    })
}
exports.getTrilhaByUserID = (req,res) =>{
    Trilha.getTrilhaByUserID(req.params.id,(err, data)=>{
        if (err){
            res.send(err);
        }else{
            res.send(data)
        }
    })
}

exports.getAllUsersIdByCurso = (req,res) =>{
    Trilha.getAllUsersIdByCurso(req.params.id,(err,ids)=>{
        if (err){
            res.send(err);
        }else{
            res.send(ids)
        }
    })
}