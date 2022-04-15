const Colaborador = require("../models/login")
const jwt = require('jsonwebtoken');

exports.getUserByEmail = (req, res) => {
    Colaborador.getUserByEmail(req.params.con_email, req.params.con_senha, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            console.log(user);
            if (Object.keys(user).length === 0) {
                res.send("Usuário Inválido!")
                console.log("error");
            } else {
                var id = user[0].con_id
                console.log(id);
                const token = jwt.sign({ id }, SECRET = "Theachievers", {
                    expiresIn: 1000
                });
                res.send({
                    token: token,
                    user: user
                })

            }
        }
    })
}