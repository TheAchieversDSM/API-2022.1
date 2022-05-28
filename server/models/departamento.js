const db = require("../config/dbconfig")

Departamento = function(departamento){
    this.dep_descricao = departamento.departamento_nome
    this.dep_head = departamento.departamento_head
}

Departamento.getAllDepart = (result) =>{
    db.query('SELECT * FROM departamento', (err, res)=>{
        if(err){
            console.log('Erro ao puxar os departamentos', err);
            result(null, err);
        }else{
            console.log('Departamentos Puxados');
            result(null, res);
        }
    })
}

Departamento.getUserDepart = (id,result) => {
    db.query('SELECT * FROM departamento WHERE dep_id = ?',id,(err,res)=>{
        if(err) {
            console.log("Erro ao encontrar o departamento do usuário")
            result(null, err);
        } else{
            console.log('Encontrado o departamento do usuário');
            result(null, res);
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

Departamento.getDepartByName = (name,result) =>{
    db.query(`SELECT dep_id FROM departamento WHERE dep_descricao = ${name}`,(err,res)=>{
        if(err){
            console.log('Erro ao puxar o departamento', err);
            result(null,err);
        }else{
            console.log('Departamentos Puxado',res);
            result(res);
        }
    })
}

Departamento.getAllOfficefromDep = (result) =>{
    const departamentos = db.query('SELECT * FROM departamento', (err, res)=>{
        if(err){
            console.log('Erro ao puxas os departamentos', err);
        }else{
            console.log('Departamentos Puxados');
        }
    })
    console.log(departamentos);
}

Departamento.createNewDep = (dep_data,result) =>{
    db.query("INSERT INTO departamento SET ?",dep_data,(err,res)=>{
        if(err){
            console.log("Erro ao inserir um novo departamento");
            result(err)
        }else{
            result(null,res)
        }
    })
}

module.exports = Departamento