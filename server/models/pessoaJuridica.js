const db = require("../config/dbconfig")

Pj = function (pj) {
    this.emp_tempo_formalizacao = pj.tempoFormalizacao,
    this.emp_natureza_juridica = pj.naturezajuridica, 
    this.data_fundacao = pj.dataFundacao,
    this.emp_nome= pj.nomeEmpresa, 
    this.emp_cnpj = pj.cnpj,
    this.colaborador_con_id = pj.id
};


Pj.createPessoaJuridica = (Userdata, result) => {
    console.log(Userdata);
    db.query("INSERT INTO pessoa_juridica SET ?", Userdata, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}
module.exports = Pj