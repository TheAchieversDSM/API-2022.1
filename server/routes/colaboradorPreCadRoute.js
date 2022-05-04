const express = require('express');
const colaboradorController = require("../controllers/colaboradorPreCadController");
const pessoaFisicaController = require("../controllers/pessoaFisicaController")
const router = require("express").Router()

router.put('/updatecolaborador/:id', colaboradorController.updateUser)

router.post('/insertpessoafisica', pessoaFisicaController.createPessoaFisica)

module.exports = router