const db = require("../config/dbconfig")
const { use } = require("../routes/colaboradorPreCadRoute")

Colaborador = function (colaborador) {
    this.con_nome = colaborador.nome,
    this.con_senha = colaborador.novaSenha,
    this.con_ddd = colaborador.ddd,
    this.con_telefone = colaborador.telefone,
    this.end_numero = colaborador.numero,
    this.end_rua = colaborador.rua,
    this.end_cidade = colaborador.cidade,
    this.end_bairro = colaborador.bairro,
    this.end_complemento = colaborador.complemento,
    this.end_cep = colaborador.cep,
    this.end_estado = colaborador.estado,
    this.end_regiao = colaborador.regiao,
    this.tipo_pessoa = colaborador.tipoContratacao
}


Colaborador.updateUser = (Userdata, Userid, result) => {
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

    db.query("INSERT INTO notificacao SET user_id = ?",Userid,(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Criado Notificacao");
            result(null, res);
        }   
    })
}

Colaborador.insertDocuments = (user_id,path,name,result) =>{
    const data = {
        contratado_con_id: user_id,
        doc_link: path,
        doc_tipo: name,
    }
    db.query("INSERT INTO documentos SET ?",data,(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Inserido documento");
            result(null);
        }  
    })
}

module.exports = Colaborador;