const { Router } = require("express");
const { getServicesByClientUISP } = require("../controllers/serviceU");
const router = Router();


//aqui se pondran los controladores que son las funciones 





router.get("/",getServicesByClientUISP);


module.exports = router;
