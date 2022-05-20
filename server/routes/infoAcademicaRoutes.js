const express = require("express")
const infoAcademica = require("../controllers/infoAcademicaController")
const router = require("express").Router()


router.post('/insertInfoAcademica',infoAcademica.createInfoAcademica )
router.get('/getInfoAcademica/:id',infoAcademica.getInfoAcademica )

module.exports = router