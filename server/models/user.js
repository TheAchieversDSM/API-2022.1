const db = require("../config/dbconfig");

User = function(user){
    this.con_id = user.id
}

User.getUserById = (id,result_colab,result_pessoa_fisica,result_qualificacao) =>{
    db.query("SELECT * FROM colaborador where con_id = ?",id, (err,res)=>{
        if (err) {
            console.log("error: ", err);
            result_colab(null, err);
        }
        else {
          console.log("Encontrado Usuário");
          result_colab(null, res);
        }
    })

    db.query("SELECT * FROM pessoa_fisica where colaborador_con_id = ?",id, (err,res)=>{
        if (err) {
            console.log("error: ", err);
            result_pessoa_fisica(null, err);
        }
        else {
          console.log("Encontrado Usuário");
          result_pessoa_fisica(null, res);
        }
    })
    
    db.query("SELECT * FROM qualificacao where colaborador_con_id = ?",id, (err,res)=>{
        if (err) {
            console.log("error: ", err);
            result_qualificacao(null, err);
        }
        else {
          console.log("Encontrado Usuário");
          result_qualificacao(null, res);
        }
    })
}

User.getAllUser = (result) => {
    db.query("SELECT * FROM colaborador colab INNER JOIN cargo car INNER JOIN departamento dep ON colab.cargo_car_id = car.car_id AND colab.departamento_dep_id = dep.dep_id ",(err,res)=>{
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

module.exports = User 

