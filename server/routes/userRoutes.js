const express = require('express');
const userController = require('../controllers/userController')
const router = require("express").Router()
const app = express();

// GET request for single file
app.get('/download/:file',function(req,res) {
    console.log('download file');
    const fileName = req.params.file;
    const caminhoArquivo = path.join( __dirname , '..', 'uploads', fileName);
    console.log(caminhoArquivo);
    // Download function provided by express
    res.download(caminhoArquivo, function(err) {
        if(err) {
            console.log(err);
        }
    })
})


router.get('/getAll',userController.getAllUser)
router.get('/getInfoById/:id',userController.getColabInfoById)
router.get('/getDocsById/:id',userController.getDocsById)
router.get('/getAllByDep/:dep_id',userController.getAllUserByDep)
//router.get('/allUserInfo/:id',userController.getAllUserInfoById)
router.put('/setWorkInfoUser/:id',userController.setWorkInfoUser)
// router.get('/download/:file',userController.downloadDocs)

module.exports = router