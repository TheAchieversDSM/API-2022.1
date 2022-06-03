const departamentoController= require("../controllers/departamentoController")
const router = require("express").Router()

router.get('/',departamentoController.getAllDepart)
router.get('/getAllDepAndHeads',departamentoController.getAllDepartAndHeads)
router.get('/userDep/:id',departamentoController.getUserDepart)
router.get('/getDepByCar/:id',departamentoController.getDepartByCargo)
router.post('/getDepByName/:name',departamentoController.getDepartByName)
router.post('/createNewDep',departamentoController.createNewDep)

module.exports = router;    