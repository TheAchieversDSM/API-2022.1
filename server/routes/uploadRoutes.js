const router = require("express").Router()
const uploadArquivoController = require("../controllers/uploadArquivoController")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    
    filename: function (req,file,cb){
        cb(null,file.originalname)
        console.log(file.originalname);
    }
})

const upload = multer({storage})

router.post(`/:id`, upload.single("file"),uploadArquivoController.insertArquivo)
router.get(`/:id`, uploadArquivoController.getArquivo)

module.exports = router