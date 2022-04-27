
db = require("../config/dbconfig")

Notificacao = function (notificacao){
    this.user_id = notificacao.id
}

Notificacao.createNotifi = (id,result) =>{
      db.query('INSERT INTO notificacao SET ?',id,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("Criado Usuário");
            result(null, res);
        }
    })
}

module.exports = Notificacao