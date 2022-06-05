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

module.exports = Curso