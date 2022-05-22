const User = require("../models/user")

exports.getColabInfoById = (req, res) => {
    const resposta = {
        user: [],
        head_user: []
    }
    User.getColabInfoById(req.params.id, (err, user) => {
        if (err){
            console.log("Erro Ao Encontrar as informações do usuário",err);    
            res.send("Erro Ao Encontrar as informações do usuário");
        }else{
            console.log('Informações do Usuário Encontradas', user);
            resposta.user = user
        }
    }, (err, head) => {
        if (err){
            console.log("Erro Ao Encontrar as informações do supervisor",err);  
            resposta.head_user = "Erro Ao Encontrar as informações do supervisor";
            console.log('Head Encontrado', head);
        }else{
            resposta.head_user = head
            res.send(resposta)
        }
    })
}

exports.getAllUser = (req, res) => {
    User.getAllUser((err, users) => {
        if (err){
            console.log("Falha ao obter todos os usuários",err);
            res.send("Falha ao obter todos os usuários");
        }else{
            console.log("Usuários Encontrados");
            res.send(users)
        }
    })
}

exports.getAllUserByDep = (req,res) => {
    User.getAllUserByDep(req.params.dep_id,(err,user)=>{
        if (err){
            console.log("Falha ao obter os usuários do departamento",err);
            res.send("Falha ao obter os usuários do departamento")
        }else{
            console.log("Encontrado usuários do departamento", user);
            res.send(user)
        }
    })
}

exports.getInfoById = (req,res) => {
    User.getInfoById(req.params.id,(err,user)=>{
        if (err){
            console.log("Falha ao tentar obter as informações do usuário",err);
            res.send("Falha ao tentar obter as informações do usuário")
        }else{
        console.log("Encontrado as informações", user);
        res.send(user)
        }
    })
}

exports.getDocsById = (req, res) => {
    User.getDocsById(req.params.id, (err, user) => {
        if (err)
            res.send(err)
        console.log("Encontrado docs", user);
        res.send(user)
    })
}
exports.downloadDocs = (req,res) =>{
    var path = require('path')
    const fileName = req.params.file;
    const filePath = path.join( __dirname , '..','uploads',fileName)
    console.log(filePath);
    res.send(filePath)
}
      
exports.setWorkInfoUser = (req,res) => {
    const data = new User(req.body)
    console.log(data);
    User.setWorkInfoUser(data,req.params.id,(err,data)=>{
        if (err){
            console.log("Erro ao inserir as informações",err);
            res.send("Erro ao inserir as informações");
        }
    })
}