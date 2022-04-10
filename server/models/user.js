const db = require("../config/dbconfig")

User = function (user) {
    this.pt_email = user.email
    this.pt_senha = user.password
};

User.createUser = (Userdata, result) => {
    db.query("INSERT INTO perfil_temp SET ?", Userdata, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Criado Usuário");
            result(null, res);
        }
    })
}

module.exports = User