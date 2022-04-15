const express = require('express');
const infoAcademicaController = require("../controllers/infoAcademicaController");
const router = require("express").Router()

router.post('/', infoAcademicaController.createInfoAcademica)

module.exports = router