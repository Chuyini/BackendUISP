const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; // Si no hay puerto en .env, usa 3000
        this.getInvoices = "/api/invoices"; // Corrige el endpoint
        this.getClients = "/api/clients";
        this.getServices = "/api/services";

        this.middlewares(); // Llama los middlewares
        this.routes(); // Configura las rutas
    }

    middlewares() {
        this.app.use(express.json()); // Habilita JSON
        this.app.use(cors()); // Habilita CORS
    }

    routes() {
        this.app.use(this.getInvoices, require("../routes/inovices")); // Llama a las rutas
        this.app.use(this.getClients, require("../routes/clients")); // Llama a las rutas
        this.app.use(this.getServices, require("../routes/services")); // Llama a las rutas
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;
