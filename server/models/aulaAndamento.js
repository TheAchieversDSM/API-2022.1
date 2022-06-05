const db = require('../config/dbconfig');

AulaAndamento = function (progresso) {
    this.aula_andamento_data_termino = progresso.data_termino,
    this.colaborador_col_id = progresso.colaborador_col_id,
    this.curso_aula_id = progresso.curso_aula_id
}

AulaAndamento.createProgresso = (pro_data, result) => {
    db.query('INSERT INTO aula_andamento SET ?', pro_data, (err, res) => {
        if (err) {
            console.log('Erro ao inserir progresso.');
            console.log(err);
            result (err)
        }
        else {
            result (null, res);
        }
    })
}

AulaAndamento.getProgressoByUserId = (id, result) => {
    db.query('SELECT * FROM aula_andamento WHERE colaborador_col_id = ?', id, (err, res) => {
        if (err) {
            console.log('Erro ao encontrar Trilha do Colaborador: ', err); 
            result(null, erro);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = AulaAndamento;