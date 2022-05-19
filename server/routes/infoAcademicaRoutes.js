const infoAcademica = require("../controllers/infoAcademicaController")
const router = require("express").Router()


router.post('/insertInfoAcademica',infoAcademica.createInfoAcademica )
router.get('/getInfoAcademica/:id',infoAcademica.get )

module.exports = router