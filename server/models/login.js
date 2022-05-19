const db = require('../config/dbconfig')


Login = function (login) {
    this.col_email = login.email,
    this.col_senha = login.password
}

Login.getUserByEmail = (col_email, col_senha, result,nivel_result) => {
    db.query("SELECT * FROM colaborador WHERE col_email = ? AND col_senha = ? ", [col_email, col_senha], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Encontrado usuario:");
            result(null, res);
        }
    })
    db.query("SELECT car_nivel_acesso FROM colaborador colab INNER JOIN cargo car ON col_email = ? AND col_senha = ? AND colab.cargo_car_id = car.car_id", [col_email, col_senha], (err, res) => {
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