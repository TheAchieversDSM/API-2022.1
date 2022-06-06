const express = require("express")
const infoAcademica = require("../controllers/infoAcademicaController")
const router = require("express").Router()


router.post('/insertInfoAcademica', infoAcademica.createInfoAcademica )
router.put('/updateInfoAcademica/:id', infoAcademica.updateInfoAcademica )
router.get('/getInfoAcademica/:id', infoAcademica.getInfoAcademica )

module.exports = router