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



module.exports = Cargos