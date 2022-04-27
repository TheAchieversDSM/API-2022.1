const express = require('express');
const departamentoController= require("../controllers/departamentoController")
const router = require("express").Router()

router.get('/',departamentoController.getAllDepart)

module.exports = router

