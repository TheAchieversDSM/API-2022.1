const express = require('express');
const cursoController = require("../controllers/cursoController");
const router = require("express").Router();


router.post('/createNewCurso', cursoController.createNewCurso)
router.get('/', cursoController.getAll)
router.get('/getCursoIdByName/:id',cursoController.getCursoIdByName)
router.get('/getAllCursoInfoById/:curso_id',cursoController.getAllCursoInfoById)

module.exports = router;