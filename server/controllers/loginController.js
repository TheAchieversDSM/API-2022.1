const Colaborador = require("../models/login")
const jwt = require('jsonwebtoken');

exports.getUserByEmail = (req, res) => {
    const resposta = {
        token: String,
        user: [],
        car_id : Number
    }
    Colaborador.getUserByEmail(req.params.col_email, req.params.col_senha, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            console.log(user);
            if (user.length === 0) {
                res.send({
                    erro:"Email ou Senha incorreto"
                })
                console.log("Usuario invalido");
            } else {
                var id = user[0].col_id
                console.log(id);
                const token = jwt.sign({ id }, SECRET = "Theachievers", {
                    expiresIn: 1000
                });
                resposta.token = token
                resposta.user = user
            }
        }
    },
    (err,nivel_id)=>{
        if (err) {
            res.send(err);
        }else{
            if (resposta.user.length != 0){
                console.log(nivel_id);
                resposta.nivel_id = nivel_id
                res.send(resposta)
            }
        }
    })
}