const Curso = require("../models/curso")

exports.createNewCurso = (req, res) => {
    const cur_data = new Curso(req.body)
    Curso.createNewCurso(cur_data, (err, newCurso) => {
        if (err) {
            res.send("ERRO")
        } else {
            console.log("Curso criado com Sucesso!");
            res.send("Curso criado com Sucesso!")
        }
    })
}
exports.getAll = (req, res) => {
    Curso.getAll((err, cursos) => {
        if (err) {
            console.log(err);
            res.send(err)
        }else{
            console.log("Cursos encontrados!")
            res.send(cursos)
        }
    })
}

exports.getCursoIdByName = (req,res) => {
    Curso.getCursoIdByName(req.params.id,(err,id) =>{
        if (err) {
            console.log(err);
            res.send(err)
        }else{
            console.log("Cursos encontrados!")
            res.send(id)
        }
    })
}

exports.getAllCursoInfoById = (req,res) =>{
    Curso.getAllCursoInfoById(req.params.curso_id,(err,info)=>{
        if (err) {
            console.log(err);
            res.send(err)
        }else{
            console.log("Cursos encontrados!")
            res.send(info)
        }
    })
}

exports.getCursoNameById = (req,res) =>{
    Curso.getCursoNameById(req.params.id,(err,nome)=>{
        if (err) {
            console.log(err);
            res.send(err)
        }else{
            console.log("Cursos encontrados!")
            res.send(nome)
        } 
    })
}