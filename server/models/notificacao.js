
db = require("../config/dbconfig")

Notificacao = function (notificacao){
    this.user_id = notificacao.id
}

Notificacao.getAll = (result) =>{
      db.query('SELECT * FROM notificacao',(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = Notificacao