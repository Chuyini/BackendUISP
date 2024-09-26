const { request, response } = require("express");
const axios = require("axios");

const getInvoicesFromUISP = async (req = request, res = response) => {
  try {
    const apiUrl = process.env.API; // API de UISP
    //recibimos lo que nos llego desde el cliente

    const {clientId , date} = req.query;

    //si no hay nada o entradas desde el body invalidas
    if(!clientId || !date){

        res.status(500).json(
           {
            msg: "faltan parametros"
           } 
        );
        return;
        
    }

    //const clientId = req.query.clientId || 198; // Ejemplo de un parámetro
    const createdDateFrom = req.query.createdDateFrom || "2024-08-02";
    const createdDateTo = req.query.createdDateTo || "2024-09-24";


    const response = await axios.get(`${apiUrl}?clientId=${clientId}&createdDateFrom=${createdDateFrom}&createdDateTo=${createdDateTo}`, {
      headers: {
        'X-Auth-App-Key': process.env.KEY // Llave de autenticación
      }
    });

    res.json(response.data); // Envía los datos como respuesta
  } catch (error) {
    console.error("Error al obtener las facturas:");
    res.status(500).json({
      msg: "Hubo un error al obtener las facturas",
    });
    return;
  }
};

module.exports = {
  getInvoicesFromUISP,
};
