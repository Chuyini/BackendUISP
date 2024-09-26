const { Router } = require("express");
const router = Router();
const { getInvoicesFromUISP } = require("../controllers/invoicesU");

//aqui se pondran los controladores que son las funciones 





router.get("/",getInvoicesFromUISP);

module.exports = router;
