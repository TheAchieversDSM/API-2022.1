const db = require("../config/dbconfig")
var today = new Date();
Historico = function (historico) {
    this.colaborador_col_id = historico.id,
    this.his_data_admissao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
}

Historico.createNewHistorico = (data, result) => {
    db.query('INSERT INTO historico set ?',data, (err, res) => {
        if (err) {
            console.log('Erro ao inserir o histórico do usuário', err);
            result(null, err);
        } else {
            console.log('Histórico Criado');
            result(null, res);
        }
    })
}
Historico.newHistoricoCargo = (data,result) =>{
    db.query('INSERT INTO historico_cargo set ?',data,(err,res) =>{
        if (err) {
            console.log('Erro ao inserir o histórico do cargo do usuário', err);
            result(null, err);
        } else {
            console.log('Histórico Criado');
            result(null, res);
        }
    })
}

Historico.desligamento = (data,id,result) =>{
    db.query(`UPDATE historico SET ? WHERE colaborador_col_id = ${id}`,data, (err,res) =>{
        if (err) {
            console.log('Erro ao inserir as informações de desligamento', err);
            result(null,err);
        } else {
            console.log('Desligamento realizado');
            result(null,res);
        }
    })
}

module.exports = Historico;