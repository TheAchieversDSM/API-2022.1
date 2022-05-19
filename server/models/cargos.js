const db = require("../config/dbconfig")

Cargos = function(Cargos){

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



module.exports = Cargos