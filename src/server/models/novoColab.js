const db = require("../config/dbconfig")

Perfil = function(perfil) {
    this.con_email = perfil.email
    this.con_senha = perfil.password
    this.tipo_pessoa = perfil.tipoPessoa
};


Perfil.createUser = (Userdata, result) => {
    db.query("INSERT INTO colaborador SET ?", Userdata, (err, res)=>{
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


module.exports = Perfil