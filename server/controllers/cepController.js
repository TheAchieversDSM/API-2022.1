const Correios = require("node-correios")
const correios = new Correios()
exports.consultaCep = (req,res) =>{
    correios.consultaCEP(req.params).then(result=>{
        return res.json(result)
    }).catch(error => {
        console.log(error)
      });
}