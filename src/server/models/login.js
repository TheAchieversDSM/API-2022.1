const db = require('../config/dbconfig')


Login = function (login) {
    this.con_email = login.email,
    this.con_senha = login.password
}

Login.getUserByEmail = (con_email, con_senha, result,nivel_result) => {
    db.query("SELECT * FROM colaborador WHERE con_email = ? AND con_senha = ? ", [con_email, con_senha], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Encontrado usuario:");
            result(null, res);
        }
    })
    db.query("SELECT car_nivel_acesso FROM colaborador colab INNER JOIN cargo car ON con_email = ? AND con_senha = ? AND colab.cargo_car_id = car.car_id", [con_email, con_senha], (err, res) => {
        if (err) {
            console.log("error: ", err);
            nivel_result(null, err);
        } else {
            console.log("Encontrado usuario:");
            nivel_result(null, res);
        }
    })
}

module.exports = Login