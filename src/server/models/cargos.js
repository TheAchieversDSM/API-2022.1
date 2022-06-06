const db = require("../config/dbconfig")

Cargos = function(cargos){
    this.car_descricao = cargos.car_descricao,
    this.car_salario = cargos.car_salario,
    this.departamento_dep_id = cargos.departamento_id
    this.car_nivel_acesso = cargos.nivel_acesso
}

Cargos.getAllCargos = (result) =>{
    db.query('SELECT * FROM cargo', (err, res)=>{
        if(err){
            console.log('Erro ao puxar os Cargos', err);
            result(null,err);
        }else{
            console.log('Cargos Puxados');
            result(null,res);
        }
    })
}

Cargos.getUserCargo = (id,result) =>{
    db.query('SELECT * FROM cargo WHERE car_id = ?',id,(err,res)=>{
        if(err){
            console.log('Erro ao Encontrar o cargo do usuário', err);
            result(null,err);
        }else{
            console.log('Encontrado o cargo do usuário');
            result(null,res);
        }
    })
}

Cargos.createNewCargo = (car_data,result) =>{
    db.query('INSERT INTO cargo SET ?',car_data,(err,res)=>{
        if(err){
            console.log("Erro ao inserir um cargo");
            console.log(err);
            result(err)
        }else{
            result(null,res)
        }
    })
}

Cargos.getAllUserIdFromCargo = (id,result) =>{
    db.query('SELECT col_id FROM colaborador WHERE cargo_car_id = ?',id,(err,res) =>{
        if(err){
            console.log('Erro ao Encontrar ID dos usuários', err);
            result(null,err);
        }else{
            console.log('Encontrado o ID dos usuários');
            result(null,res);
        }
    })
}



module.exports = Cargos