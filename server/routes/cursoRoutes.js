const express = require('express');
const cursoController = require("../controllers/cursoController");
const router = require("express").Router();


router.post('/createNewCurso', cursoController.createNewCurso)
router.get('/', cursoController.getAll)
module.exports = router;