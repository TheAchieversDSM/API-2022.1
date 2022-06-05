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