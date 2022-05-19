const express = require('express');
const cargosController = require("../controllers/cargosController");
const router = require("express").Router();

router.get('/',cargosController.getAllCargos);
router.get('/userCargo/:id',cargosController.getUserCargo)
module.exports = router;