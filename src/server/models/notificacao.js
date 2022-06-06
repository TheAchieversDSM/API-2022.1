db = require("../config/dbconfig")

Notificacao = function (notificacao){
    this.user_id = notificacao.id
}

Notificacao.getAll = (result) =>{
      db.query('SELECT *,col_nome FROM notificacao notif INNER JOIN colaborador colab ON notif.user_id = colab.col_id ',(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }
    })
}

Notificacao.deleteNotificacao = (id,result) =>{
    db.query(`DELETE FROM notificacao WHERE user_id = ${id}`,(err,res) => {
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