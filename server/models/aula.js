const db = require("../config/dbconfig");

Aula = function (aula) {
    this.curso_aula_nome = aula.aula_nome,
    this.trilha_curso_id = aula.curso_id
}

Aula.createNewAula = (aula_data, result) => {
    console.log(aula_data.curso_aula_nome)
    db.query(`INSERT INTO curso_aula SET curso_aula_nome = ${aula_data.curso_aula_nome}, trilha_curso_id = ${aula_data.trilha_curso_id} `, (err, res) => {
        if (err) {
            console.log("ERRO")
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Aula.getAulaIdByName = (aula_nome, result) => {
    db.query(`SELECT curso_aula_id FROM curso_aula WHERE curso_aula_nome = ${aula_nome}`, (err, res) => {
        if (err) {
            console.log("ERRO")
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Aula