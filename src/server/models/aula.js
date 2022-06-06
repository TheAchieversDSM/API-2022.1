const db = require("../config/dbconfig");

Aula = function (aula) {
    this.curso_aula_nome = aula.aula_nome
    this.trilha_curso_id = aula.aula_id
}

Aula.createNewAula = (data, result) => {
    db.query(`INSERT INTO curso_aula SET ?`, data, (err, res) => {
        if (err) {
            console.log("Erro ao criar uma nova aula", err)
            result(err)
        } else {
            result(res)
        }
    })
}

Aula.getAulaIdByName = (aula_nome, result) => {
    console.log(aula_nome)
    db.query(`SELECT curso_aula_id FROM curso_aula WHERE curso_aula_nome = ?`,aula_nome, (err, res) => {
        if (err) {
            console.log("Erro ao encontrar a aula")
            result(null, err)
        } else {
            result(res)
        }
    })
}

module.exports = Aula