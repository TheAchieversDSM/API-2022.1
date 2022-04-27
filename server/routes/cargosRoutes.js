const express = require('express');
const cargosController = require("../controllers/cargosController");
const router = require("express").Router();

router.get('/',cargosController.getAllCargos);

module.exports = router;