const { request, response } = require("express");
const axios = require("axios");





const getAllClientFromUISP = async (req = request, res = response) => {
    try {
        const apiUrl = process.env.APIC; // API de UISP para clientes 
        //recibimos lo que nos llego desde el cliente

        //const { userIdent } = req.query;

        //si no hay nada o entradas desde el body invalidas
       /* if (!userIdent) {

            res.status(500).json(
                {
                    msg: "faltan parametros"
                }
            );
            return;

        }*/



        //hacemos la solictud.
        const response = await axios.get(`${apiUrl}`, {
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

module.exports = { getAllClientFromUISP };