const db = require("../config/dbconfig");

InfoAcademica = function (infoAcademica) {
    this.qua_formacao = infoAcademica.formacao,
    this.qua_curso = infoAcademica.cursos,
    this.qua_lingua = infoAcademica.linguas,
    this.colaborador_col_id = infoAcademica.id,
    this.qua_nome_instituicao = infoAcademica.instituicao
}

InfoAcademica.createInfoAcademica = (InfoAcademica,result) => {
    db.query("INSERT INTO qualificacao  SET ?", InfoAcademica, (err, res) => {
        if (err) {
            console.log("Erro ao criar a qualificacao do usuário", err);
            result(null, err);
        }
        else {
            console.log("Criado a qualificação Usuário");
            result(null, res);
        }
    });
}
InfoAcademica.getInfoAcademica = (id,result) =>{
    db.query("SELECT * FROM qualificacao WHERE colaborador_col_id = ?",id,(err,res)=>{
        if (err) {
            console.log("Erro ao encontrar a qualificação do usuário", err);
            result(null, err);
        }
        else {
            console.log("Encontrado a qualificação Usuário");
            result(null, res);
        }
    })
}

module.exports = InfoAcademica;