const db = require("../config/dbconfig")

Departamento = function(departamento){

}

Departamento.getAllDepart = (result) =>{
    db.query('SELECT * FROM departamento', (err, res)=>{
        if(err){
            console.log('Erro ao puxar os departamentos', err);
            result(null,err);
        }else{
            console.log('Departamentos Puxados');
            result(null,res);
        }
    })
}
Departamento.getDepartByCargo = (id,result) =>{
    console.log(id);
    db.query(`SELECT dep_id FROM departamento,cargo WHERE car_id = ${id} AND dep_id =departamento_dep_id `,(err,res)=>{
        if(err){
            console.log('Erro ao puxar os departamentos', err);
            result(null,err);
        }else{
            console.log('Departamentos Puxados',res);
            result(res);
        }
    })
}

Departamento.getAllOfficefromDep = (result) =>{
    const departamentos = db.query('SELECT * FROM departamento', (err, res)=>{
        if(err){
            console.log('Erro ao puxas os departaments', err);
        }else{
            console.log('Departamentos Puxados');
        }
    })
    console.log(departamentos);
}

module.exports = Departamento