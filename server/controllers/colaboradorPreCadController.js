const Colaborador = require("../models/colaboradorPreCad");

exports.updateUser = (req, res) => {
    const Userdata = new Colaborador(req.body)
    console.log(Userdata);
    console.log("Usuario: ", Userdata)

    // Save Tutorial in the database
    Colaborador.updateUser(Userdata, req.params.id, (err, data) => {
        if (err)
            res.send(err);
    },
    (err,res)=>{
    if (err) {
        if (err.errno == "1062"){
            console.log("Entrada Duplicada");
            res.send({
              erro:"Cadastro já Enviado"
            })
          }
        }
    });
};

exports.insertDocuments = (req,res)=>{
    Object.keys(req.files).map(file =>{
        console.log(file);
    Colaborador.insertDocuments(req.params.id,req.files[file][0].path,req.files[file][0].fieldname,(err,data)=>{
        if (err){
            res.send(err)
        }else{
            res.send(data)
        }
    });
})
};