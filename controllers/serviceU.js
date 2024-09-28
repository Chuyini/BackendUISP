const { request, response } = require("express");
const axios = require("axios");

const getServicesByClientUISP = async (req = request, res = response) => {
  try {
    const apiUrl = process.env.APIS; // API de UISP
    //recibimos lo que nos llego desde el cliente

    const { clientId } = req.query;

    //si no hay nada o entradas desde el body invalidas
    if(!clientId){

        res.status(500).json(
           {
            msg: "faltan parametros"
           } 
        );
        return;
        
    }



    const response = await axios.get(`${apiUrl}?clientId=${clientId}`, {
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

module.exports = {getServicesByClientUISP};