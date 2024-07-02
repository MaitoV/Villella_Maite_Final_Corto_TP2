import express from 'express';
import SondaRouter from './router/sondas.js';
import errorHandler from './middleware/errorHandler.js';

class Server {
    constructor(port, persistencia, notificacion) {
        this.port = port;
        this.persistencia = persistencia;
        this.notificacion = notificacion;

        this.app = express()
        this.server = null;
    }
    async start() {
        this.app.use(express.json());

        this.app.use('/api/sondas', new SondaRouter().start());
        this.app.use(errorHandler);

        const PORT = this.port;
        this.server = this.app.listen(PORT, () => console.log(`Servidor ApiRest escuchando en el puerto ${PORT}`));
        this.server.on('error', error => console.log(`Error en servidor: ${error.message}`));

        return this.app;
    }
    async stop() {
        if(this.server) {
            this.server.close()
            this.server = null
        }
    }
}

export default Server;


