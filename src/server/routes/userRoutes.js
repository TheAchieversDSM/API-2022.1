const express = require('express');
const userController = require('../controllers/userController')
const router = require("express").Router()

router.get('/getAll',userController.getAllUser)
router.get('/getInfoById/:id',userController.getInfoById)
router.get('/getDocsById/:id',userController.getDocsById)
router.get('/getAllByDep/:dep_id',userController.getAllUserByDep)
router.get('/allUserInfo/:id',userController.getAllUserInfoById)
router.put('/setWorkInfoUser/:id',userController.setWorkInfoUser)
router.post('/download/:file',userController.downloadDocs)

module.exports = router