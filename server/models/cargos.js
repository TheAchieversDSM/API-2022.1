const db = require("../config/dbconfig")

Cargos = function(cargos){
    this.car_descricao = cargos.cargo_nome,
    this.car_salario = cargos.cargo_salario,
    this.departamento_dep_id = cargos.departamento_id
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
            result(err)
        }else{
            result(null,res)
        }
    })
}



module.exports = Cargos