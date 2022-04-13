const db = require("../config/dbconfig");

InfoAcademica = function (infoAcademica) {
    this.qua_formacao = infoAcademica.formacao,
    this.qua_curso = infoAcademica.cursos,
    this.qua_lingua = infoAcademica.linguas,
    this.colaborador_con_id = infoAcademica.id
}

InfoAcademica.createInfoAcademica = (InfoAcademica,result) => {
    console.log(InfoAcademica);
    db.query("INSERT INTO qualificacao  SET ?", InfoAcademica, (err, res) => {
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

module.exports = InfoAcademica;