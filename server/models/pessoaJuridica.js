const db = require("../config/dbconfig")

Pj = function (pj) {
    this.col_emp_tempo_formalizacao = pj.tempoFormalizacao,
    this.col_emp_natureza_juridica = pj.naturezajuridica, 
    this.col_data_fundacao = pj.dataFundacao,
    this.col_emp_nome= pj.nomeEmpresa, 
    this.col_emp_cnpj = pj.cnpj,
    this.col_id = pj.id
};


Pj.createPessoaJuridica = (Userdata,id, result) => {
    console.log(Userdata);
    db.query("UPDATE colaborador SET ?  WHERE col_id = ?", [Userdata,id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Pessoa Juridica: ", err);
            result(null, res);
        }
    })
}
module.exports = Pj