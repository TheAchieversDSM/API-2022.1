const User = require("../models/user")
const download = require("download")
const fs = require("fs");

exports.getColabInfoById = (req, res) => {
    const resposta = {
        user: [],
        head_user: []
    }
    User.getColabInfoById(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        console.log('Informações do Usuário Encontradas', user);
        resposta.user = user
    }, (err, head) => {
        if (err)
            res.send(err);
        console.log('Head Encontrado', head);
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
        if (err)
        res.send(err);
    })
}