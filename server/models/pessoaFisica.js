const db = require("../config/dbconfig")

Pf = function (pf) {
    this.user_cpf = pf.cpf, // pessoa_fisica
    this.user_nacionalidade = pf.nacionalidade, // pessoa_fisica
    this.user_naturalidade = pf.naturalidade, // pessoa_fisica
    this.user_raca = pf.raca, // pessoa_fisica
    this.user_genero = pf.genero, // pessoa_fisica
    this.user_data_nascimento = pf.data, // pessoa_fisica
    this.user_estado_civil = pf.estadoCivil, // pessoa_fisica
    this.user_filho = pf.filho, // pessoa_fisica
    this.colaborador_con_id = pf.id
}

Pf.createPessoaFisica = (Userdata, result) => {
    console.log(Userdata);
    db.query("INSERT INTO pessoa_fisica SET ?", Userdata, (err, res) => {
        if (err) {
            console.log("DEU RUIM AAAAAAAAAAAAAAAAAAAAAAA");
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