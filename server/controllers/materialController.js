const Material = require("../models/uploadMat")

exports.createNewMaterial = (req, res) => {
    const mat_data = new Material(req.body)
    Material.createNewMaterial(mat_data,req.file.path, (err, res) => {
        if (err) {
            console.log(err)
            res.send("erro",err)
        } else {
            res.send("Aula e Material enviados!")
        }
    })
}

