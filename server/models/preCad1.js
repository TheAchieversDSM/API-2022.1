const db = require("../config/dbconfig")

User = function (user) {
    this.con_nome = user.nome,
        this.con_ddd = user.ddd,
        this.con_telefone = user.telefone,
        this.con_endereco = user.endereco,
        this.end_numero = user.numero,
        this.end_rua = user.rua,
        this.end_bairro = user.bairro,
        this.end_complemento = user.complemento,
        this.end_cep = user.cep,
        this.end_estado = user.estado,
        this.end_regiao = user.regiao,
        this.tipo_pessoa = user.tipoContratacao
    this.con_id = user.id
}

Pf = function (Pf) {
    this.user_cpf = pf.cpf, // pessoa_fisica
        this.user_nacionalidade = pf.nacionalidade, // pessoa_fisica
        this.user_naturalidade = pf.naturalidade, // pessoa_fisica
        this.user_raca = pf.raca, // pessoa_fisica
        this.user_genero = pf.genero, // pessoa_fisica
        this.user_data_nascimento = pf.data, // pessoa_fisica
        this.user_estado_civil = pf.estadoCivil, // pessoa_fisica
        this.user_filho = pf.filho // pessoa_fisica
}

User.updateUser = (Userdata, Userid, result) => {
    console.log(Userdata);
    console.log(Userid);
    db.query("UPDATE colaborador SET ?  WHERE con_id = ?", [Userdata, Userid], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Criado Usuário");
            result(null, res);
        }
    })
}



module.exports = User, Pf