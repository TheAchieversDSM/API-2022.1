const db = require("../config/dbconfig")

Pf = function (pf) {
    this.col_cpf = pf.cpf, // pessoa_fisica
    this.col_nacionalidade = pf.nacionalidade, // pessoa_fisica
    this.col_naturalidade = pf.naturalidade, // pessoa_fisica
    this.col_raca = pf.raca, // pessoa_fisica
    this.col_genero = pf.genero, // pessoa_fisica
    this.col_data_nascimento = pf.data, // pessoa_fisica
    this.col_estado_civil = pf.estadoCivil, // pessoa_fisica
    this.col_filho = pf.filho, // pessoa_fisica
    this.col_id = pf.id
};

Pf.createPessoaFisica = (Userdata,id, result) => {
    console.log(Userdata);
    db.query("UPDATE colaborador SET ?  WHERE col_id = ?", [Userdata,id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            if ("Criado Usuário");
            result(null, res);
        }
    })
}
module.exports = Pf