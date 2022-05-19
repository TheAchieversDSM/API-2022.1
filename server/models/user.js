const db = require("../config/dbconfig");
User = function (user) {
    this.departamento_dep_id = user.dep_id,
    this.cargo_car_id = user.car_id,
    this.col_head_id = user.head_id,
    this.tipo_contratacao_cont_id = user.tipo_contratacao
}

User.getColabInfoById = (id, result, head_result) => {
    db.query("SELECT *, DATE_FORMAT(user_data_nascimento ,'%d/%m/%Y')  AS data_nascimento , YEAR(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(user_data_nascimento))) AS idade FROM colaborador WHERE col_id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Encontrado Usuário");
            result(null, res);
        }
    })

    db.query("SELECT colab2.col_id, colab2.col_nome,car_descricao FROM colaborador colab INNER JOIN cargo car INNER JOIN colaborador colab2 on colab.col_id = ? AND colab.head_id = colab2.col_id AND colab2.cargo_car_id = car.car_id", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            head_result(null, err);
        }
        else {
            console.log("Encontrado Usuário");
            head_result(null, res);
        }
    })
}

User.getAllUser = (result) => {
    db.query("SELECT * FROM colaborador colab INNER JOIN cargo car INNER JOIN departamento dep INNER JOIN qualificacao qual INNER JOIN tipo_contratacao tc ON colab.cargo_car_id = car.car_id AND colab.departamento_dep_id = dep.dep_id AND qual.colaborador_col_id = colab.col_id AND colab.tipo_contratacao_cont_id = tc.cont_id ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Encontrado os Usuários");
            result(null, res);
        }
    })
}

User.getAllUserByDep = (id, result) => {
    db.query(`SELECT * FROM colaborador colab INNER JOIN cargo car INNER JOIN departamento dep INNER JOIN pessoa_fisica pf INNER JOIN qualificacao qual INNER JOIN tipo_contratacao tc ON colab.departamento_dep_id = ${id} AND dep.dep_id = colab.departamento_dep_id  AND colab.cargo_car_id = car.car_id AND pf.colaborador_col_id = colab.col_id AND qual.colaborador_col_id = colab.col_id AND colab.tipo_contratacao_cont_id = tc.cont_id`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log("Encontrado os Usuários");
            result(null, res);
        }
    })
}

User.getInfoById = (id, result) => {
    db.query(`SELECT *,DATE_FORMAT(user_data_nascimento ,'%d/%m/%Y') AS data_nascimento FROM colaborador colab INNER JOIN pessoa_fisica pf INNER JOIN qualificacao qual ON colab.col_id =${id} AND pf.colaborador_col_id = colab.col_id AND qual.colaborador_col_id = colab.col_id`, (err, res) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

User.getDocsById = (id, result) => {
    db.query(`SELECT * FROM documentos docs WHERE contratado_col_id = ${id}`, (err, res) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

User.setWorkInfoUser = (data, id, result) => {
    db.query("UPDATE colaborador SET ?  WHERE col_id = ?", [data, id], (err, res) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}


module.exports = User

