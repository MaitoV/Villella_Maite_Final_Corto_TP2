import express from 'express';
import RouterSonda from './router/sondas.js'; 
import { errorHandler } from './middleware/errorHandler.js';
import {PORT} from './config.js';

const app = express();

app.use(express.json());

app.use('/api/sondas', new RouterSonda().start());
app.use(errorHandler);

const server = app.listen(PORT, () => console.log('Servidor ApiRestFul escuchando en el puerto ' + PORT));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));
