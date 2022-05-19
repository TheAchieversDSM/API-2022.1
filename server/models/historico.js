const db = require("../config/dbconfig")
var today = new Date();
Historico = function (historico) {
    this.colaborador_col_id = historico.id,
    this.his_cargo = historico.cargo,
    this.his_salario = historico.salario,
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

module.exports = Historico;