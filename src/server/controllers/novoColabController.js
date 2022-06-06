const Perfil = require("../models/novoColab");

exports.createUser = (req, res) => {
    const Userdata = new Perfil(req.body)
    Perfil.createUser(Userdata, (err, data) => {
      if (err){
        console.log("Erro ao Criar um novo colaborador",err);
        if (err.errno == "1062"){
          console.log("Entrada Duplicada");
          res.send({
            erro:"Usuário já existe, por favor insira um email válido"
          })
        }
      }else{
        console.log("Usuário Criado com Sucesso!");
        res.send("Usuário Criado com Sucesso!")
      }

    });
  };
  