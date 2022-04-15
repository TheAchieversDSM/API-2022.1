const User = require("../models/user")

exports.getUserById = (req,res) =>{
    const resposta = {
        colab: [],
        pf: [],
        acad: []
    }
    User.getUserById(req.params.id,(err,user)=>{
        if(err)
        res.send(err);
        console.log('Resultado encontrado',user);
        resposta.colab = user
    },(err,user_pf)=>{
        if(err)
        res.send(err);
        console.log('Resultado encontrado',user_pf);
        resposta.pf=user_pf
    },
    (err,user_acad)=>{
        if(err)
        res.send(err);
        console.log('Resultado encontrado',user_acad);
        resposta.acad=user_acad
        res.send(resposta)
    })
}

exports.getAllUser = (req,res) =>{
    User.getAllUser((err,users)=>{
        if(err)
        res.send("Falha",err);
        console.log("Usuários Encontrados:",users);
        res.send(users)
    })
}