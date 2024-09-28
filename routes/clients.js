const { Router } = require("express");
const router = Router();
const { getAllClientFromUISP} = require("../controllers/clientsU");

//aqui se pondran los controladores que son las funciones 





router.get("/",getAllClientFromUISP);


module.exports = router;
