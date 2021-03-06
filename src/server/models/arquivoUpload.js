const db = require("../config/dbconfig");

Arquivo = function(arquivo){
    this.contratado_col_id = arquivo.id
    this.doc_link = arquivo.link
}

Arquivo.insertArquivo = (id,path,result) =>{

    db.query(`INSERT INTO documentos(colaborador_col_id,doc_link,doc_tipo) VALUES (?,?,'adad')`,[id,path],(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("ENVIADO ARQUIVO");
            result(null, res);
        }
    })
}

Arquivo.getArquivo = (id,result) =>{
    db.query("SELECT * FROM documentos WHERE colaborador_col_id = ?",id,(err,res)=>{
        if (err) {
            console.log("Erro ao encontrar documentos do usuário", err);
            result(null, err);
        }
        else {
            console.log("Encontrado os documentos do Usuário");
            result(null, res);
        }
    })
}

module.exports = Arquivo

