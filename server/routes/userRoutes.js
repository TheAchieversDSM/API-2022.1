const express = require('express');
const userController = require('../controllers/userController')
const router = require("express").Router()

router.get('/getAll',userController.getAllUser)
router.get('/getAllInactiveUser',userController.getAllInactiveUser)
router.get('/getInfoById/:id',userController.getColabInfoById)
router.get('/getDocsById/:id',userController.getDocsById)
router.get('/getAllByDep/:dep_id',userController.getAllUserByDep)
router.get('/desligamento/:id',userController.desligamento)
router.put('/setWorkInfoUser/:id',userController.setWorkInfoUser)

module.exports = router