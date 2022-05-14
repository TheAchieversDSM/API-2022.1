const User = require("../models/user")

exports.getAllUserInfoById = (req, res) => {
    const resposta = {
        user: [],
        head_user: []
    }
    User.getAllUserInfoById(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        console.log('Resultado encontrado', user);
        resposta.user = user
    }, (err, head) => {
        if (err)
            res.send(err);
        console.log('Resultado encontrado', head);
        resposta.head_user = head

        res.send(resposta)
    })
}

exports.getAllUser = (req, res) => {
    User.getAllUser((err, users) => {
        if (err)
            res.send("Falha", err);
        console.log("Usuários Encontrados:", users);
        res.send(users)
    })
}

exports.getAllUserByDep = (req,res) => {
    User.getAllUserByDep(req.params.dep_id,(err,user)=>{
        if (err)
            res.send(err)
        console.log("Encontrado usuários do departamento", user);
        res.send(user)
    })
}

exports.getInfoById = (req,res) => {
    User.getInfoById(req.params.id,(err,user)=>{
        if (err)
            res.send(err)
        console.log("Encontrado infos", user);
        res.send(user)
    })
}