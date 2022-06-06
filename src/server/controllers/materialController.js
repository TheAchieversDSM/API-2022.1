const Material = require("../models/uploadMat")

exports.createNewMaterial = (req, res) => {
    const mat_data = new Material(req.body)
    console.log(req.file);
    Material.createNewMaterial(req.params.id, req.file.path, (err, file) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send("Aula e Material enviados!")
        }
    })
}

exports.getAllMaterialFromAula = (req,res) => {
    Material.getAllMaterialFromAula(req.params.id,(err,materiais)=>{
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(materiais)
        }
    })
}

