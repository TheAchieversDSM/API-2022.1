const db = require("../config/dbconfig")
const { use } = require("../routes/colaboradorPreCadRoute")

Colaborador = function (colaborador) {
    this.col_nome = colaborador.nome,
    this.col_senha = colaborador.novaSenha,
    this.col_ddd = colaborador.ddd,
    this.col_telefone = colaborador.telefone,
    this.col_end_numero = colaborador.numero,
    this.col_end_rua = colaborador.rua,
    this.col_end_cidade = colaborador.cidade,
    this.col_end_bairro = colaborador.bairro,
    this.col_end_complemento = colaborador.complemento,
    this.col_end_cep = colaborador.cep,
    this.col_end_estado = colaborador.estado,
    this.col_end_regiao = colaborador.regiao,
    this.col_tipo_pessoa = colaborador.tipoPessoa
}


Colaborador.updateUser = (Userdata, Userid, result,resultnotificacao) => {
    db.query("UPDATE colaborador SET ?  WHERE col_id = ?", [Userdata, Userid], (err, res) => {
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
            resultnotificacao(null, err);
        }
        else {
            console.log("Criado Notificacao");
            resultnotificacao(null, res);
        }   
    })
}

Colaborador.insertDocuments = (user_id,path,name,result) =>{
    const data = {
        colaborador_col_id: user_id,
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