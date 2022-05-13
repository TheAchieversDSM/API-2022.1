const Arquivo = require("../models/arquivoUpload")

exports.insertArquivo = (req, res) =>{
    Arquivo.insertArquivo(req.params.id,req.file.path,(err,file)=>{
        if (err){
            res.send(err)
        }else{
            res.send(file)
        }
    })
}