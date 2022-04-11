const User = require("../models/user");
const jwt = require('jsonwebtoken');

exports.createUser = (req, res) => {

    const Userdata = new User(req.body)
    console.log("Usuario:", Userdata)
    // Save Tutorial in the database
    User.createUser(Userdata, (err, data) => {
      if (err)
    res.send(err);

    });
  };

exports.getUserByEmail = (req,res)=>{
  User.getUserByEmail(req.params.con_email,req.params.con_senha,(err,user)=>{
    if(err){
      res.send(err);
    }else{
      console.log(user);
      if(Object.keys(user).length === 0  ){
        res.send("Usuário Inválido!")
        console.log("error");
      }else{
        var id = user[0].con_id
        console.log(id);
        const token = jwt.sign({id},SECRET = "oi", {
          expiresIn: 300
        });
        console.log(token);
        res.json({ auth: true, token: token , user:user })
        
 
        
      }
    }

    
  })
}