const Material = require("../models/uploadMat")

exports.createNewMaterial = (req, res) => {
    const mat_data = new Material(req.body)
    console.log(req.file);
    Material.createNewMaterial(req.params.id, req.file.path, (err, res) => {
        if (err) {
            console.log(err)
            res.send("erro", err)
        } else {
            res.send("Aula e Material enviados!")
        }
    })
}

