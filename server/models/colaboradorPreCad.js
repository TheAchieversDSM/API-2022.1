const db = require("../config/dbconfig")

Colaborador = function (colaborador) {
        this.con_nome = colaborador.nome,
        this.con_ddd = colaborador.ddd,
        this.con_telefone = colaborador.telefone,
        this.end_numero = colaborador.numero,
        this.end_rua = colaborador.rua,
        this.end_bairro = colaborador.bairro,
        this.end_complemento = colaborador.complemento,
        this.end_cep = colaborador.cep,
        this.end_estado = colaborador.estado,
        this.end_regiao = colaborador.regiao,
        this.tipo_pessoa = colaborador.tipoContratacao
}

Colaborador.updateUser = (Userdata, Userid, result) => {
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



module.exports = Colaborador
