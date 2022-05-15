const db = require("../config/dbconfig")
var today = new Date();
Historico = function (historico) {
    this.colaborador_con_id = historico.id,
    this.his_cargo = historico.cargo
    this.his_salario = historico.salario
    this.his_data_admissao = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
}

Historico.createNewHistorico = (data, result) => {
    db.query('INSERT INTO historico set ?',data, (err, res) => {
        if (err) {
            console.log('Erro ao puxar os Cargos', err);
            result(null, err);
        } else {
            console.log('Cargos Puxados');
            result(null, res);
        }
    })
}

module.exports = Historico;