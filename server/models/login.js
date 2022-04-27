const db = require('../config/dbconfig')


Login = function (login) {
    this.con_email = login.email,
    this.con_senha = login.password
}

Login.getUserByEmail = (con_email, con_senha, result) => {
    db.query("SELECT * FROM colaborador colab INNER JOIN cargo car ON colab.cargo_car_id = car.car_id AND colab.con_email = ? AND colab.con_senha = ? ", [con_email, con_senha], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Encontrado usuario:");
            result(null, res);
        }
    })
}

module.exports = Login