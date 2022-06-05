const db = require("../config/dbconfig");

Trilha = function (trilha) {
    this.trilha_curso_id = trilha.trilha_curso_id,
    this.colaborador_col_id = trilha.colaborador_col_id
}

Trilha.createNewTrilha = (tri_data, result) => {
    db.query('INSERT INTO trilhas_aprendizagem SET ?', tri_data, (err, res) => {
        if (err) {
            console.log('Erro ao inserir uma trilha.');
            console.log(err);
            result(err);
        }
        else {
            result(null, res);
        }
    })
}

Trilha.getAllTrilha = (result) => {
    db.query('SELECT * FROM trilhas_aprendizagem', (err, res) => {
        if (err) {
            console.log(err);
            result(err);
        }
        else {
            result(res);
        }
    })  
}

Trilha.getTrilhaByUserID = (id, result) => {
    db.query('SELECT * FROM trilhas_aprendizagem WHERE colaborador_col_id = ?', id, (err, res) => {
        if (err) {
            console.log('Erro ao encontrar Trilha do Colaborador: ', err);
            result(null, err);
        }
        else {
            console.log('Trilha do Usuário encontrada.');
            result(null, res);
        }
    })
}

Trilha.getAllUsersIdByCurso = (curso_id,result) =>{
    db.query('SELECT colaborador_col_id FROM trilhas_aprendizagem WHERE trilha_curso_id = ?',curso_id,(err,res)=>{
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = Trilha