const db = require("../config/dbconfig")

Curso = function (curso) {
    this.trilha_curso_nome = curso.curso_nome,
    this.cargo_car_id = curso.car_id
}

Curso.createNewCurso = (cur_data, result) => {
    db.query('INSERT INTO trilha_curso SET ?', cur_data, (err, res) => {
        if (err) {
            console.log("Erro ao inserir um curso");
            console.log(err);
            result(err)
        } else {
            result(null, res)
        }
    })
}

Curso.getAll = (result) => {
    db.query('SELECT * FROM trilha_curso', (err, res) => {
        if (err) {
            console.log(err);
            result(err)
        } else {
            result(res)
        }
    })
}
Curso.getAllCursoInfoById = (id_curso,result) =>{
    db.query('SELECT * FROM trilha_curso tc INNER JOIN curso_aula ca ON ca.trilha_curso_id = tc.trilha_curso_id AND tc.trilha_curso_id = ? ',[id_curso],(err, res) => {
        if (err) {
            console.log(err);
            result(err)
        } else {
            result(res)
        }

})
}

Curso.getCursoIdByName = (curso_name,result) => {
    db.query('SELECT trilha_curso_id FROM trilha_curso WHERE trilha_curso_nome = ?',curso_name,(err,res)=>{
        if (err) {
            console.log(err);
            result(err)
        } else {
            result(res)
        }
    })
}

Curso.getCursoNameById = (cur_id,result) => {
    db.query('SELECT trilha_curso_nome FROM trilha_curso WHERE trilha_curso_id = ?',cur_id,(err,res)=>{
        if (err) {
            console.log(err);
            result(err)
        } else {
            result(res)
        }
    })
}
module.exports = Curso